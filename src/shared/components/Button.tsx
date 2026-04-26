import { forwardRef, type ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-text-strong shadow-paper hover:bg-primary-hover focus-visible:outline-primary-hover',
  secondary:
    'bg-surface text-text-strong shadow-sm ring-1 ring-border hover:bg-surface-soft focus-visible:outline-accent',
  ghost:
    'bg-transparent text-text hover:bg-white/40 focus-visible:outline-accent',
}

export const buttonStyles = (variant: ButtonVariant = 'primary') =>
  `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]}`

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className = '', type = 'button', variant = 'primary', ...props },
  ref,
) {
  return <button ref={ref} type={type} className={`${buttonStyles(variant)} ${className}`.trim()} {...props} />
})
