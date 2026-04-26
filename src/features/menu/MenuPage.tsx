import { Link } from 'react-router-dom'
import { Card } from '../../shared/components/Card'
import { SectionTitle } from '../../shared/components/SectionTitle'

const menuItems = [
  {
    title: 'Galeria',
    subtitle: 'Momentitos top que guarde contigo',
    meta: '8 hermosos recuerdos listos para revivir',
    to: '/gallery',
    rotation: 'sm:-rotate-2',
  },
  {
    title: 'Carta',
    subtitle: 'Porque se cuanto te encantan las cartas',
    meta: 'Una carta con mucho amoooor para my One and only',
    to: '/letter',
    rotation: 'sm:rotate-1',
  },
  {
    title: 'Sorpresa',
    subtitle: 'Un detallito diferente cada vez',
    meta: 'Porque quiero pasar una vida sorprendiendote con cosas lindas',
    to: '/surprise',
    rotation: 'sm:-rotate-1',
  },
]

export function MenuPage() {
  return (
    <section className="flex flex-1 flex-col gap-8 pb-10 pt-4 sm:gap-10 sm:pb-14">
      <Link className="text-sm font-semibold text-muted transition hover:text-text" to="/">
        Volver a la portada
      </Link>

      <SectionTitle
        eyebrow="Menu"
        title="La porte d'entrée de esta casita"
        description="Porque como todo lo lindo que hay aqui es para ti, quiero que la experiencia de entrar a este lugarcito sea tan bonita como el contenido que vas a encontrar dentro."
      />

      <div className="grid gap-5 md:grid-cols-3 md:items-start">
        {menuItems.map((item) => (
          <Link key={item.title} to={item.to} className={`group block transition duration-300 ${item.rotation}`}>
            <Card className="relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
              <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-secondary/45 blur-2xl transition duration-300 group-hover:bg-primary/45" />
              <div className="relative flex min-h-56 flex-col justify-between gap-5">
                <div className="space-y-3">
                  <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-muted ring-1 ring-border/80">
                    Abrir
                  </div>
                  <h2 className="text-5xl leading-none">{item.title}</h2>
                  <p className="text-sm leading-7 text-text">{item.subtitle}</p>
                </div>

                <div className="space-y-3">
                  <div className="h-px w-full bg-border/70" />
                  <p className="text-sm text-muted">{item.meta}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
