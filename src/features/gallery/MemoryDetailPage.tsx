import { Link, useParams } from 'react-router-dom'
import { AudioBubblePlayer } from '../../shared/components/AudioBubblePlayer'
import { buttonStyles } from '../../shared/components/Button'
import { Card } from '../../shared/components/Card'
import { BackToMenu } from '../../shared/components/BackToMenu'
import { ChatMemory } from './ChatMemory'
import { memories } from './memories.data'

export function MemoryDetailPage() {
  const { slug } = useParams()
  const memory = memories.find((item) => item.slug === slug && item.immersive)

  if (!memory) {
    return (
      <section className="flex flex-1 items-center justify-center py-10">
        <Card className="max-w-xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="rose-seal w-5 h-5 text-[0.6rem]" />
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">
              Recuerdo no encontrado
            </p>
          </div>

          <h1 className="mt-4 text-4xl leading-none">
            Esta puertita no se abrió
          </h1>

          <p className="mt-4 text-sm leading-7 text-muted">
            Puede que este recuerdo todavía no exista o que su slug haya cambiado.
            La galería sigue intacta para que encuentres otro momento bonito.
          </p>

          <Link className={`${buttonStyles('primary')} mt-6`} to="/gallery">
            ← Volver a la galería
          </Link>
        </Card>
      </section>
    )
  }

  return (
    <section className="flex flex-1 flex-col gap-6 pb-12 pt-4 sm:gap-8">
      {/* Header de navegación */}
      <div className="flex justify-between flex-wrap gap-3">
        <BackToMenu to="/gallery" label="Volver a la galería" variant="gallery" />
        <BackToMenu to="/menu" label="Volver a la casita" />
      </div>

      {/* Hero + Info Grid */}
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        {/* Hero con marcoelegante */}
        <div className="frame-elegant overflow-hidden rounded-[1.75rem] border border-white/60 bg-surface shadow-paper">
          {memory.imagePath ? (
            <div className="relative">
              <img
                className="h-[20rem] w-full object-cover sm:h-[28rem]"
                src={memory.imagePath}
                alt={memory.title}
              />
              {/* Esquina decorativa floral sutil */}
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center">
                <span className="text-lg text-rose-gold/60">✿</span>
              </div>
            </div>
          ) : (
            <div className="paper-texture-diary flex h-[20rem] items-center justify-center bg-surface-soft sm:h-[28rem]">
              <p className="max-w-sm px-6 text-center text-lg leading-8 text-text">
                {memory.shortFeeling}
              </p>
            </div>
          )}
        </div>

        {/* Panel informativopremium */}
        <Card variant="memory" className="space-y-5 p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <span className="rose-seal w-6 h-6" />
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-muted">
              Memoria especial
            </p>
          </div>

          <div className="space-y-3">
            <h1 className="balanced-wrap text-5xl leading-none sm:text-6xl">
              {memory.title}
            </h1>

            <p className="text-sm leading-7 text-muted font-medium">
              {memory.date}
            </p>

            <p className="text-base leading-8 text-text">
              {memory.shortFeeling}
            </p>
          </div>

          <div className="pt-2">
            <AudioBubblePlayer
              soundtrackPath={memory.soundtrackPath}
              soundtrackTitle={memory.soundtrackTitle}
            />
          </div>
        </Card>
      </div>

      {/* Sección de Chat */}
      {memory.type === 'chat' && memory.chatSections ? (
        <div className="rounded-[1.75rem] overflow-hidden">
          <div className="botanical-divider my-6">
            <span className="botanical-divider-icon mx-3" />
          </div>
          
          <Card variant="letter" className="p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">✿</span>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-muted">
                Chat recreado
              </p>
            </div>

            <ChatMemory sections={memory.chatSections} />
          </Card>

          <div className="botanical-divider my-6">
            <span className="botanical-divider-icon mx-3" />
          </div>
        </div>
      ) : null}

      {/* Bloques de texto inferiores */}
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Bloque: Lo que guardo de ese momento */}
        <Card variant="letter" className="p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg text-rose-gold/70">♥</span>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-muted">
              Lo que guardo de ese momento
            </p>
          </div>

          <div className="mt-3 space-y-4 whitespace-pre-wrap text-sm leading-8 text-text">
            {memory.longText}
          </div>
        </Card>

        {/* Bloque: Cierre bonito */}
        <Card variant="memory" className="p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">♡</span>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-muted">
              Cierre bonito
            </p>
          </div>

          <div className="mt-3 space-y-4 text-sm leading-8 text-text">
            <p>
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

          <div className="mt-6 pt-4 border-t border-border/30">
            <Link className={`${buttonStyles('primary', 'flower')} w-full sm:w-auto`} to="/gallery">
              Volver a la puertita de la casita
            </Link>
          </div>
        </Card>
      </div>

      {/* Footerdecorativo */}
      <div className="flex justify-center pt-6">
        <div className="flex items-center gap-2 text-xs text-muted/50">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          <span>Memoria especial · {memory.date}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
        </div>
      </div>
    </section>
  )
}