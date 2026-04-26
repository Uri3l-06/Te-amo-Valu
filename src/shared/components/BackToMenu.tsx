import { Link } from 'react-router-dom'

type BackToMenuProps = {
  to: string
  label?: string
  variant?: 'menu' | 'gallery'
  showIcon?: boolean
}

export function BackToMenu({
  to,
  label = 'Volver a la casita',
  variant = 'menu',
  showIcon = true
}: BackToMenuProps) {
  const icon = variant === 'menu' ? '⌂' : '←'
  
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-muted transition-all duration-300 hover:-translate-x-1 hover:text-text bg-white/60 hover:bg-white/80 ring-1 ring-border/50 hover:ring-border/80 hover:shadow-sm"
    >
      {showIcon && (
        <span className="text-base transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span className="relative">
        {label}
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary/40 transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  )
}