import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../shared/components/Button'
import { SectionTitle } from '../../shared/components/SectionTitle'
import { BackToMenu } from '../../shared/components/BackToMenu'
import { getRandomItemWithoutImmediateRepeat } from '../../shared/utils/random'
import { memories } from '../gallery/memories.data'

const surprisePool = memories.filter((memory) => memory.surpriseEligible)

export function SurprisePage() {
  const [currentId, setCurrentId] = useState<string | null>(surprisePool[0]?.id ?? null)
  const currentMemory = surprisePool.find((memory) => memory.id === currentId) ?? surprisePool[0]

  function handleNextSurprise() {
    const nextItem = getRandomItemWithoutImmediateRepeat(surprisePool, currentId)

    if (nextItem) {
      setCurrentId(nextItem.id)
    }
  }

  return (
    <section className="flex flex-1 flex-col gap-8 pb-10 pt-4 sm:gap-10 sm:pb-14">
      <BackToMenu to="/menu" label="Volver a la casita" />

      <SectionTitle
        eyebrow="Sorpresa"
        title="Un detallito distinto para cada visita"
        description="Aqui no hay soundtrack por ahora. Solo un gesto corto, dulce y ligero, con el mismo lenguaje visual claro y blush para que la sorpresa tambien se sienta parte del mismo album."
      />

      {currentMemory ? (
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-paper">
            {currentMemory.imagePath ? (
              <img
                className="h-72 w-full object-cover sm:h-96"
                src={currentMemory.imagePath}
                alt={currentMemory.title}
              />
            ) : (
              <div className="paper-texture flex h-72 items-center justify-center bg-surface-soft p-8 text-center sm:h-96">
                <p className="max-w-md text-lg leading-8 text-text">{currentMemory.shortFeeling}</p>
              </div>
            )}
          </div>

          <div className="paper-texture rounded-[2rem] border border-border bg-surface p-6 shadow-paper sm:p-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">Sorpresa actual</p>
            <h2 className="mt-4 text-5xl leading-none">{currentMemory.title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{currentMemory.date}</p>
            <p className="mt-6 text-base leading-8 text-text">{currentMemory.shortFeeling}</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              {currentMemory.longText ||
                'Este espacio puede quedarse cortito cuando quieras que la sorpresa sea mas ligera que una memoria completa.'}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={handleNextSurprise}>Quiero otra sorpresita</Button>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-border bg-white/60 px-5 py-3 text-sm font-semibold text-text transition hover:bg-white"
                to="/gallery"
              >
                Ir a la galeria
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
