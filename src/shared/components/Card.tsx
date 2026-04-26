import type { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className = '', ...props }: CardProps) {
  return (
    <div
      className={`paper-texture rounded-[2rem] border border-border/90 bg-surface/95 shadow-paper ${className}`.trim()}
      {...props}
    />
  )
}
