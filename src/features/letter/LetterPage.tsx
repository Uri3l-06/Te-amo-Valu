import { useState } from 'react'
import { SectionTitle } from '../../shared/components/SectionTitle'
import { BackToMenu } from '../../shared/components/BackToMenu'
import { Envelope } from './Envelope'

const letterParagraphs = [
  'Este espacio queda listo para que pongas una carta real mas adelante, con tus palabras exactas y el tono que quieras dejarle a Valery.',
  'Por ahora quise dejar una maqueta que ya se sienta intima: papel claro, sombras suaves, textura liviana y una lectura tranquila tambien en celular.',
  'La idea es que luego solo cambies el contenido, sin tener que rehacer la experiencia ni la direccion visual completa.',
]

export function LetterPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="flex flex-1 flex-col gap-8 pb-10 pt-4 sm:gap-10 sm:pb-14">
      <BackToMenu to="/menu" label="Volver a la casita" />

      <SectionTitle
        eyebrow="Carta"
        title="Un sobre para abrir con calma"
        description="La experiencia tambien arranca bien en mobile: primero el sobre, luego una hojita legible y suave. Sin verse como una simple card, sino como algo mas cercano a papel real."
      />

      <div className="space-y-6">
        <Envelope isOpen={isOpen} onOpen={() => setIsOpen(true)} />

        {isOpen ? (
          <article className="paper-texture mx-auto max-w-3xl rounded-[2rem] border border-border bg-[#fffaf6] p-6 shadow-paper sm:p-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">Carta placeholder</p>
            <h2 className="mt-4 text-5xl leading-none">Para ti, con carinito</h2>
            <div className="mt-6 space-y-5 text-sm leading-8 text-text sm:text-base">
              {letterParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ) : null}
      </div>
    </section>
  )
}
