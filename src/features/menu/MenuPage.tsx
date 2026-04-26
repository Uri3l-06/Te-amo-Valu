import { Link } from 'react-router-dom'
import { Card } from '../../shared/components/Card'
import { SectionTitle } from '../../shared/components/SectionTitle'
import { BackToMenu } from '../../shared/components/BackToMenu'

const menuItems = [
  {
    title: 'Galería',
    subtitle: 'Momentitos top que guardé contigo',
    meta: '8 hermosos recuerdos listos para revivir',
    to: '/gallery',
    variant: 'polaroid' as const,
    decoration: 'pressedFlower' as const,
    rotation: 'sm:-rotate-2',
    extra: '✿',
  },
  {
    title: 'Carta',
    subtitle: 'Porque sé cuánto te encantan las cartas',
    meta: 'Una carta con mucho amor para mi One and only',
    to: '/letter',
    variant: 'letter' as const,
    decoration: 'seal' as const,
    rotation: 'sm:rotate-1',
    extra: '♥',
  },
  {
    title: 'Sorpresa',
    subtitle: 'Un detallito diferente cada vez',
    meta: 'Porque quiero pasar una vida sorprendiéndote',
    to: '/surprise',
    variant: 'memory' as const,
    decoration: 'paperTape' as const,
    rotation: 'sm:-rotate-1',
    extra: '☆',
  },
]

export function MenuPage() {
  return (
    <section className="flex flex-1 flex-col gap-8 pb-10 pt-4 sm:gap-10 sm:pb-14">
      <BackToMenu to="/" label="Volver a la portada" showIcon={false} />

      <SectionTitle
        eyebrow="Menú"
        title="La porte d'entrée de esta casita"
        description="Porque como todo lo lindo que hay aquí es para ti, quiero que la experiencia de entrar a este lugarcito sea tan bonita como el contenido que vas a encontrar dentro."
        showFloral={true}
        className="animate-fade-up-soft opacity-0"
      />

      <div className="grid gap-6 md:grid-cols-3 md:items-start">
        {menuItems.map((item, index) => (
          <Link
            key={item.title}
            to={item.to}
            className={`group block transition duration-300 hover:-translate-y-2 animate-fade-up-soft opacity-0 ${item.rotation} ${index === 0 ? '' : index === 1 ? 'delay-200' : 'delay-400'}`}
          >
            <Card variant={item.variant} decoration={item.decoration} className="group-hover:shadow-flower transition-shadow duration-300">
              {/* Brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2rem]" />

              <div className="relative flex min-h-56 flex-col justify-between gap-4 p-4 sm:p-5">
                {/* Header decorativo */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-full bg-white/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted shadow-sm ring-1 ring-border/60">
                    Abrir
                  </div>
                  <span className="text-lg text-rose-gold/70 group-hover:text-rose-gold transition-colors duration-300">
                    {item.extra}
                  </span>
                </div>

                {/* Contenido principal */}
                <div className="space-y-3">
                  <h2 className="text-4xl sm:text-5xl leading-none">{item.title}</h2>
                  <p className="text-sm leading-6 text-text">{item.subtitle}</p>
                </div>

                {/* Divisor decorativo */}
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
                  <span className="text-[0.65rem] text-muted/60">♡</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-border/50 to-transparent" />
                </div>

                {/* Meta */}
                <p className="text-xs text-muted leading-5">{item.meta}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Footerdecorativo del menú */}
      <div className="flex justify-center pt-4">
        <div className="flex items-center gap-3 text-xs text-muted/50">
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          <span>Hecho con amor y gerberas</span>
          <span className="w-1 h-1 rounded-full bg-primary/40" />
        </div>
      </div>
    </section>
  )
}