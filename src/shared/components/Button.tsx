import { forwardRef, type ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonAccent = 'none' | 'flower'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  accent?: ButtonAccent
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-text-strong shadow-paper hover:bg-primary-hover focus-visible:outline-primary-hover active:scale-[0.98] transition-all duration-200',
  secondary:
    'bg-surface text-text-strong shadow-sm ring-1 ring-border hover:bg-surface-soft focus-visible:outline-accent active:scale-[0.98] transition-all duration-200',
  ghost:
    'bg-transparent text-text hover:bg-white/40 focus-visible:outline-accent transition-all duration-200',
}

export const buttonStyles = (
  variant: ButtonVariant = 'primary',
  accent: ButtonAccent = 'none'
) => {
  const accentClass = accent === 'flower' ? 'relative overflow-hidden' : ''
  return `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${accentClass}`
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className = '', type = 'button', variant = 'primary', accent = 'none', children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={`${buttonStyles(variant, accent)} ${className}`.trim()}
      {...props}
    >
      {accent === 'flower' && (
        <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[0.65rem] opacity-60">
          ✿
        </span>
      )}
      {children}
    </button>
  )
})