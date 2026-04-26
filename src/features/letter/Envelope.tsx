type EnvelopeProps = {
  isOpen: boolean
  onOpen: () => void
}

export function Envelope({ isOpen, onOpen }: EnvelopeProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative mx-auto block w-full max-w-2xl rounded-[2rem] border border-border bg-surface px-5 py-8 text-left shadow-paper transition duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-hover sm:px-8 sm:py-10"
      aria-expanded={isOpen}
    >
      <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-[2rem] bg-gradient-to-b from-white/50 to-transparent" />
      <div className="relative overflow-hidden rounded-[1.7rem] border border-border bg-surface-soft p-5 sm:p-7">
        <div
          className={[
            'mx-auto h-0 w-0 border-l-[120px] border-r-[120px] border-t-[90px] border-l-transparent border-r-transparent transition duration-500 sm:border-l-[180px] sm:border-r-[180px] sm:border-t-[120px]',
            isOpen ? 'border-t-primary/70 -translate-y-3 sm:-translate-y-5' : 'border-t-secondary/90',
          ].join(' ')}
        />

        <div className="relative -mt-10 rounded-[1.5rem] border border-border bg-white/80 p-5 shadow-sm sm:-mt-14 sm:p-7">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">Para Valery</p>
          <h2 className="mt-3 text-4xl leading-none sm:text-5xl">Una carta con calma</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            {isOpen
              ? 'Ya abriste el sobre. Ahora la hojita espera abajo.'
              : 'Toca el sobre para abrir una carta hecha con textura suave, blush y un poquito de rose-gold.'}
          </p>
        </div>
      </div>
    </button>
  )
}
