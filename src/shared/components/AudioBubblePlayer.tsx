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
  const [isMuted, setIsMuted] = useState(false)
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
      setIsPlaying(false)
      setProgress(0)
      audio.currentTime = 0
      clearCurrentAudio(audio)
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
  }, [])

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

  function toggleMute() {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    const nextMuted = !audio.muted
    audio.muted = nextMuted
    setIsMuted(nextMuted)
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
    <div className="rounded-[1.75rem] border border-border/80 bg-white/65 p-4 shadow-paper backdrop-blur-sm">
      <audio ref={audioRef} preload="metadata" src={soundtrackPath} />
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted">Soundtrack</p>
          <p className="text-sm font-semibold text-text-strong">{soundtrackTitle}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-text-strong transition hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-hover"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pausar soundtrack' : 'Reproducir soundtrack'}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-soft text-sm text-text transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            onClick={toggleMute}
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
          >
            {isMuted ? 'On' : 'Mute'}
          </button>
        </div>
      </div>

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

      {hasError ? (
        <p className="mt-3 text-xs leading-6 text-muted">
          Este audio placeholder no pudo reproducirse. La interfaz ya esta lista para reemplazarlo por el
          soundtrack real.
        </p>
      ) : null}
    </div>
  )
}
