import { Link } from 'react-router-dom'
import { Card } from '../../shared/components/Card'
import { buttonStyles } from '../../shared/components/Button'
import { ChatMemory } from './ChatMemory'
import type { MemoryItem } from './memories.data'

type MemoryCardProps = {
  memory: MemoryItem
  onOpenCompactMemory: (memory: MemoryItem) => void
}

function PhotoPreview({ imagePath, title }: { imagePath: string; title: string }) {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] bg-surface-soft">
      <img className="h-56 w-full object-cover sm:h-64" src={imagePath} alt={title} loading="lazy" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#603328]/15 to-transparent" />
    </div>
  )
}

function TextPreview({ title }: { title: string }) {
  return (
    <div className="paper-texture rounded-[1.5rem] border border-border/60 bg-white/55 p-5">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">Recuerdo escrito</p>
      <h3 className="mt-3 text-2xl leading-none">{title}</h3>
      <div className="mt-4 h-px w-full bg-border/60" />
      <p className="mt-4 text-sm leading-7 text-muted">
        Una notita guardada con ternura, para volver cuando quieras sentir un ratito bonito.
      </p>
    </div>
  )
}

export function MemoryCard({ memory, onOpenCompactMemory }: MemoryCardProps) {
  const cardScale = memory.featured ? 'sm:scale-[1.01]' : ''

  return (
    <Card
      className={`mb-4 break-inside-avoid overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:shadow-float sm:mb-5 sm:p-5 ${cardScale}`.trim()}
    >
      <div className="space-y-4">
        {memory.type === 'photo' && memory.imagePath ? <PhotoPreview imagePath={memory.imagePath} title={memory.title} /> : null}

        {memory.type === 'chat' && memory.chatMessages ? (
          <div className="rounded-[1.5rem] bg-surface-soft/80 p-4">
            <ChatMemory compact messages={memory.chatMessages.slice(0, 2)} />
          </div>
        ) : null}

        {memory.type === 'text' ? <TextPreview title={memory.title} /> : null}

        <div className="space-y-3 px-1 pb-1">
          <div className="flex flex-wrap items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted">
            <span>{memory.type}</span>
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>{memory.date}</span>
          </div>

          <div className="space-y-2">
            <h3 className="text-3xl leading-none text-text-strong">{memory.title}</h3>
            <p className="text-sm leading-7 text-text">{memory.shortFeeling}</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {memory.immersive ? (
              <Link className={buttonStyles('primary')} to={`/gallery/${memory.slug}`}>
                Para más amor…
              </Link>
            ) : (
              <button className={buttonStyles('secondary')} onClick={() => onOpenCompactMemory(memory)}>
                Abrir recuerdo
              </button>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
