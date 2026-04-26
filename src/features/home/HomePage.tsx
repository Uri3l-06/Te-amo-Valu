import { Link } from 'react-router-dom'
import { buttonStyles } from '../../shared/components/Button'

export function HomePage() {
  return (
    <section className="flex flex-1 items-stretch py-2 sm:py-4">
      <div className="grid flex-1 overflow-hidden rounded-[2.2rem] border border-border/80 bg-surface shadow-paper lg:grid-cols-[1.1fr_0.9fr]">
        {/* Panel izquierdo - Imagen con overlaybotánico */}
        <div className="relative min-h-[24rem] overflow-hidden sm:min-h-[30rem] lg:min-h-[calc(100vh-4rem)]">
          <img
            className="absolute inset-0 h-full w-full object-cover animate-fade-in-soft opacity-0"
            src="/backgrounds/hands-background.jpg"
            alt="Fondo suave de manos tomadas"
          />
          {/* Overlaybotánico muy sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#603328]/20 via-[#e5ad9e]/8 to-white/15" />
          {/* Capa botánica sutil en unaesquina */}
          <div className="petal-scatter pointer-events-none absolute inset-0 opacity-30" />

          {/* Contenido móvil */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:hidden">
            <div className="paper-texture rounded-[1.75rem] bg-white/70 p-5 backdrop-blur-sm animate-fade-up-soft opacity-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="rose-seal w-6 h-6 text-[0.6rem] animate-scale-in-soft opacity-0" />
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted">Un regalo para mi princess</p>
              </div>
              <h1 className="mt-1 text-5xl leading-none animate-fade-up-soft delay-200 opacity-0">Hola, Valely.</h1>
            </div>
          </div>
        </div>

        {/* Panel derecho - Contenidoeditorial */}
        <div className="paper-texture-editorial flex items-center bg-surface px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="mx-auto max-w-xl space-y-7">
            {/* Encabezado desktop */}
            <div className="hidden lg:block">
              <div className="flex items-center gap-3 mb-4 animate-fade-up-soft opacity-0">
                <span className="rose-seal w-8 h-8 animate-scale-in-soft opacity-0" />
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-muted">Un regalo para mi princess</p>
                  <div className="botanical-divider-icon" />
                </div>
              </div>
              <h1 className="text-7xl leading-none animate-fade-up-soft delay-200 opacity-0">Hola, Valely.</h1>
            </div>

            {/* Texto principal */}
            <div className="space-y-5 text-sm leading-8 text-text sm:text-base">
              <p className="relative pl-4 border-l-2 border-primary/40 animate-fade-up-soft delay-300 opacity-0">
                Hice esto porque me dejaste pensando sobre los momentos más importantes para mí y sabiendo que contigo hasta
                los momentos simples se sienten como algo que vale la pena guardar y recordar siempre.
              </p>
              <p className="relative pl-4 border-l-2 border-secondary/50 animate-fade-up-soft delay-400 opacity-0">
                Quise hacer algo bonito para ti, bebé. Un espacio hecho con todo mi amor,
                para que puedas entrar cuando quieras a revivir momentos lindos, recordar cosas que nos hacen reír,
                emocionarnos o simplemente sentirnos cerca.
              </p>
              <p className="relative pl-4 border-l-2 border-accent/40 animate-fade-up-soft delay-500 opacity-0">
                Además es una representación de mi casita. Para que puedas entrar cuando quieras a recordar
                un poquito de todo lo lindo que hemos vivido.
              </p>
            </div>

            {/* CTAmás especial */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center animate-fade-up-soft delay-600 opacity-0">
              <Link className={buttonStyles('primary', 'flower')} to="/menu">
                Presiona aquí amor ♥
              </Link>
              <div className="flex items-center gap-2 text-sm text-muted">
                <span className="text-lg">♡</span>
                <span>Hola amor :)</span>
              </div>
            </div>

            {/* Nota decorativapequeña */}
            <div className="flex items-center gap-2 text-xs text-muted pt-2 animate-fade-up-soft delay-700 opacity-0">
              <span className="w-2 h-2 rounded-full bg-rose-gold/60" />
              <span>Hecho con todo mi amor, Posdata te amo más</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}