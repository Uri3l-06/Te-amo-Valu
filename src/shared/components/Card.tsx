import type { HTMLAttributes, ReactNode } from 'react'

type CardVariant = 'default' | 'polaroid' | 'memory' | 'letter'
type CardDecoration = 'none' | 'pressedFlower' | 'paperTape' | 'seal'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant
  decoration?: CardDecoration
  showInnerFrame?: boolean
  children: ReactNode
}

const variantClasses: Record<CardVariant, string> = {
  default: 'rounded-[2rem] border border-border/90 bg-surface/95 shadow-paper',
  polaroid: 'rounded-[1.25rem] bg-white shadow-card-float border-4 border-white',
  memory: 'rounded-[1.75rem] border border-border/70 bg-surface/90 shadow-paper',
  letter: 'rounded-[1.5rem] border border-border/60 bg-[#fffaf6] shadow-flower',
}

export function Card({
  variant = 'default',
  decoration = 'none',
  showInnerFrame = false,
  className = '',
  children,
  ...props
}: CardProps) {
  const frameBorder = showInnerFrame
    ? 'ring-1 ring-border/50 ring-inset'
    : ''

  return (
    <div
      className={`paper-texture relative overflow-hidden ${variantClasses[variant]} ${frameBorder} ${className}`.trim()}
      {...props}
    >
      {decoration === 'pressedFlower' && (
        <div className="pressed-flower pointer-events-none absolute inset-0 opacity-40" />
      )}
      {decoration === 'paperTape' && (
        <div className="paper-tape-h pointer-events-none absolute top-0 left-1/4" />
      )}
      {decoration === 'seal' && (
        <div className="rose-seal pointer-events-none absolute -top-2 -right-2 text-white text-[0.65rem] font-bold">
          ♥
        </div>
      )}
      {children}
    </div>
  )
}