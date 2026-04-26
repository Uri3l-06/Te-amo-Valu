let currentAudio: HTMLAudioElement | null = null

export function registerPlayingAudio(audioElement: HTMLAudioElement) {
  if (currentAudio && currentAudio !== audioElement) {
    currentAudio.pause()
    currentAudio.currentTime = 0
  }

  currentAudio = audioElement
}

export function clearCurrentAudio(audioElement: HTMLAudioElement) {
  if (currentAudio === audioElement) {
    currentAudio = null
  }
}

export function stopCurrentAudio() {
  if (!currentAudio) {
    return
  }

  currentAudio.pause()
  currentAudio.currentTime = 0
  currentAudio = null
}
