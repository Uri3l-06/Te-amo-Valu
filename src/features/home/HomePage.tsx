import { Link } from 'react-router-dom'
import { buttonStyles } from '../../shared/components/Button'

export function HomePage() {
  return (
    <section className="flex flex-1 items-stretch py-2 sm:py-4">
      <div className="grid flex-1 overflow-hidden rounded-[2.2rem] border border-border/80 bg-surface shadow-paper lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[24rem] overflow-hidden sm:min-h-[30rem] lg:min-h-[calc(100vh-4rem)]">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/backgrounds/hands-background.jpg"
            alt="Fondo suave de manos tomadas"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#603328]/25 via-[#e5ad9e]/10 to-white/10" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:hidden">
            <div className="rounded-[1.75rem] bg-white/65 p-5 backdrop-blur-sm">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">Un regalo para mi pincesa</p>
              <h1 className="mt-3 text-5xl leading-none">Hola, Valely.</h1>
            </div>
          </div>
        </div>

        <div className="paper-texture flex items-center bg-surface px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="mx-auto max-w-xl space-y-6">
            <div className="hidden lg:block">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">Un regalo para mi pincesa</p>
              <h1 className="mt-4 text-7xl leading-none">Hola, Valely.</h1>
            </div>

            <div className="space-y-5 text-sm leading-8 text-text sm:text-base">
              <p>
                Hice esto porque me dejaste pensando sobre los momentos más importantes para mi y sabiendo que contigo hasta
                los momentos simples, se sienten como algo que vale la pena guardar y recordar siempre.
              </p>
              <p>
                Quise hacer algo bonito para ti bebé, para que puedas entrar cuando quieras a un espacio hecho con todo mi amor,
                para revivir momentos lindos, recordar cosas que nos hacen reír, emocionarnos o simplemente sentirnos cerca.
              </p>
              <p>
                Además es una representación de mi casita, para que puedas entrar cuando quieras recordar
                un poquito de todo lo lindo que hemos vivido.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link className={buttonStyles('primary')} to="/menu">
                Presiona aqui amor 
              </Link>
              <p className="text-sm text-muted">Hola amor :)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
