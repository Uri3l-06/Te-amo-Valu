import { useEffect, useId, useRef, useState, type ChangeEvent } from 'react'
import { clearCurrentAudio, registerPlayingAudio } from '../utils/audioManager'

type AudioBubblePlayerProps = {
  soundtrackPath: string
  soundtrackTitle: string
}

function formatTime(value: number) {
  if (!Number.isFinite(value)) {
    return '0:00'
  }

  const minutes = Math.floor(value / 60)
  const seconds = Math.floor(value % 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export function AudioBubblePlayer({ soundtrackPath, soundtrackTitle }: AudioBubblePlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const progressId = useId()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    const handleLoadedMetadata = () => setDuration(audio.duration)
    const handleTimeUpdate = () => setProgress(audio.currentTime)
    const handlePause = () => setIsPlaying(false)
    const handlePlay = () => setIsPlaying(true)
    const handleEnded = () => {
      if (isLooping) {
        audio.currentTime = 0
        audio.play()
      } else {
        setIsPlaying(false)
        setProgress(0)
        audio.currentTime = 0
        clearCurrentAudio(audio)
      }
    }
    const handleError = () => {
      setHasError(true)
      setIsPlaying(false)
    }

    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    return () => {
      audio.pause()
      audio.currentTime = 0
      clearCurrentAudio(audio)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [isLooping])

  async function togglePlay() {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (isPlaying) {
      audio.pause()
      return
    }

    try {
      registerPlayingAudio(audio)
      setHasError(false)
      await audio.play()
    } catch {
      setHasError(true)
      setIsPlaying(false)
    }
  }

  function toggleLoop() {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    const nextLooping = !isLooping
    audio.loop = nextLooping
    setIsLooping(nextLooping)
  }

  function handleSeek(event: ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    const nextTime = Number(event.target.value)
    audio.currentTime = nextTime
    setProgress(nextTime)
  }

  return (
    <div
      className={`rounded-[1.75rem] border border-border/80 bg-white/65 p-4 shadow-paper backdrop-blur-sm transition-all duration-500 ${
        isPlaying ? 'ring-1 ring-primary/30 shadow-lg' : ''
      }`}
    >
      <audio ref={audioRef} preload="metadata" src={soundtrackPath} />

      <div className="flex items-center justify-between gap-4">
        {/* Info section */}
        <div className="flex-1 min-w-0">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted">Soundtrack</p>
          <p className="text-sm font-semibold text-text-strong truncate">{soundtrackTitle}</p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Play/Pause button */}
          <button
            className={`flex h-12 w-12 items-center justify-center rounded-full text-lg transition-all duration-200 ${
              isPlaying
                ? 'bg-primary text-text-strong shadow-md hover:bg-primary-hover scale-105'
                : 'bg-primary text-text-strong hover:bg-primary-hover'
            }`}
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Loop button */}
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-full border text-xs font-medium transition-all duration-200 ${
              isLooping
                ? 'border-primary bg-primary/20 text-primary'
                : 'border-border bg-surface-soft text-muted hover:bg-white'
            }`}
            onClick={toggleLoop}
            aria-label={isLooping ? 'Desactivar bucle' : 'Activar bucle'}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 1l4 4-4 4" />
              <path d="M3 11V9a4 4 0 0 1 4-4h14" />
              <path d="M7 23l-4-4 4" />
              <path d="M21 13v2a4 4 0 0 1-4 4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4 space-y-2">
        <label className="sr-only" htmlFor={progressId}>
          Progreso del soundtrack
        </label>
        <input
          id={progressId}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-[var(--color-accent)]"
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={Math.min(progress, duration || 0)}
          onChange={handleSeek}
        />
        <div className="flex justify-between text-xs text-muted">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Error message */}
      {hasError ? (
        <p className="mt-3 text-xs leading-6 text-muted">
          Este audio placeholder no pudo reproducirse.
        </p>
      ) : null}
    </div>
  )
}