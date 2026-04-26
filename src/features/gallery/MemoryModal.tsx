import { useEffect } from 'react'
import { AudioBubblePlayer } from '../../shared/components/AudioBubblePlayer'
import { Button } from '../../shared/components/Button'
import { ChatMemory } from './ChatMemory'
import type { MemoryItem } from './memories.data'

type MemoryModalProps = {
  memory: MemoryItem | null
  onClose: () => void
}

export function MemoryModal({ memory, onClose }: MemoryModalProps) {
  useEffect(() => {
    if (!memory) {
      return
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [memory, onClose])

  if (!memory) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#35241d]/30 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <button className="absolute inset-0 cursor-default" onClick={onClose} aria-label="Cerrar recuerdo" />

      <div className="relative z-10 max-h-[92vh] w-full overflow-hidden rounded-t-[2rem] border border-border bg-surface shadow-paper sm:max-w-2xl sm:rounded-[2rem]">
        <div className="hide-scrollbar max-h-[92vh] overflow-y-auto p-5 sm:p-7">
          <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-border sm:hidden" />

          <div className="space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">Recuerdo</p>
                <h2 className="mt-2 text-4xl leading-none">{memory.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{memory.date}</p>
              </div>

              <Button variant="ghost" className="px-4 py-2 text-xs uppercase tracking-[0.24em]" onClick={onClose}>
                Cerrar
              </Button>
            </div>

            {memory.imagePath ? (
              <img
                className="h-64 w-full rounded-[1.75rem] object-cover sm:h-80"
                src={memory.imagePath}
                alt={memory.title}
              />
            ) : null}

            {memory.type === 'chat' && memory.chatMessages ? <ChatMemory messages={memory.chatMessages} /> : null}

            <div className="space-y-4">
              <p className="text-base leading-8 text-text">{memory.shortFeeling}</p>
              <p className="text-sm leading-7 text-muted">
                {memory.longText ||
                  'Este recuerdo aun esta con texto placeholder, pero la composicion ya quedo lista para recibir el contenido real.'}
              </p>
            </div>

            <AudioBubblePlayer
              soundtrackPath={memory.soundtrackPath}
              soundtrackTitle={memory.soundtrackTitle}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
