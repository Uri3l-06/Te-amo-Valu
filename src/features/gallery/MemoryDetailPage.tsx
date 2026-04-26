import { Link, useParams } from 'react-router-dom'
import { AudioBubblePlayer } from '../../shared/components/AudioBubblePlayer'
import { buttonStyles } from '../../shared/components/Button'
import { ChatMemory } from './ChatMemory'
import { memories } from './memories.data'

export function MemoryDetailPage() {
  const { slug } = useParams()
  const memory = memories.find((item) => item.slug === slug && item.immersive)

  if (!memory) {
    return (
      <section className="flex flex-1 items-center justify-center py-10">
        <div className="paper-texture max-w-xl rounded-[2rem] border border-border bg-surface p-8 text-center shadow-paper">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">Recuerdo no encontrado</p>
          <h1 className="mt-4 text-4xl leading-none">Esta puertita no se abrio</h1>
          <p className="mt-4 text-sm leading-7 text-muted">
            Puede que este recuerdo todavia no exista o que su slug haya cambiado. La galeria sigue intacta para
            que encuentres otro momento bonito.
          </p>
          <Link className={`${buttonStyles('primary')} mt-6`} to="/gallery">
            Volver a la galeria
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="flex flex-1 flex-col gap-6 pb-12 pt-4 sm:gap-8">
      <Link className="text-sm font-semibold text-muted transition hover:text-text" to="/gallery">
        Volver a la galeria
      </Link>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-paper">
          {memory.imagePath ? (
            <img className="h-[20rem] w-full object-cover sm:h-[28rem]" src={memory.imagePath} alt={memory.title} />
          ) : (
            <div className="paper-texture flex h-[20rem] items-center justify-center bg-surface-soft sm:h-[28rem]">
              <p className="max-w-sm px-6 text-center text-lg leading-8 text-text">{memory.shortFeeling}</p>
            </div>
          )}
        </div>

        <div className="space-y-5 rounded-[2rem] border border-border bg-white/55 p-5 shadow-paper backdrop-blur-sm sm:p-6">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">Memoria especial</p>
          <div className="space-y-3">
            <h1 className="balanced-wrap text-5xl leading-none sm:text-6xl">{memory.title}</h1>
            <p className="text-sm leading-7 text-muted">{memory.date}</p>
            <p className="text-base leading-8 text-text">{memory.shortFeeling}</p>
          </div>

          <AudioBubblePlayer soundtrackPath={memory.soundtrackPath} soundtrackTitle={memory.soundtrackTitle} />
        </div>
      </div>

      {memory.type === 'chat' && memory.chatSections ? (
        <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-paper">
          <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">Chat recreado</p>
          <ChatMemory sections={memory.chatSections} />
        </div>
      ) : null}

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="paper-texture rounded-[2rem] border border-border bg-surface-soft/70 p-6 shadow-paper">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">Lo que guardo de ese momento</p>
          <div className="mt-4 space-y-4 text-sm leading-8 text-text whitespace-pre-wrap">
            {memory.longText}
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-white/60 p-6 shadow-paper backdrop-blur-sm">
          <<p>
  Y así, sin que tú lo supieras, ese mensajito se quedó guardado en mí.
  No por lo perfecto que fue, sino por todo lo que me hizo sentir.
</p>

<p>
  Porque esa noche entendí que a veces algo chiquito, como un mensaje a las
  12:08 a.m., puede hacer que el corazón empiece a imaginar cosas bonitas.
</p>

<p>
  Tal vez para cualquiera fue solo una conversación más, pero para mí fue el
  inicio de una emoción que todavía me gusta recordar.
</p>
          </div>

          <Link className={`${buttonStyles('primary')} mt-6`} to="/gallery">
            Volver a la puertita de la casita
          </Link>
        </div>
      </div>
    </section>
  )
}
