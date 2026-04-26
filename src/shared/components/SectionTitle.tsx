type SectionTitleProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionTitle({ eyebrow, title, description, align = 'left' }: SectionTitleProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <span className="rounded-full bg-white/60 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-muted shadow-sm ring-1 ring-border/80">
        {eyebrow}
      </span>
      <div className="space-y-2">
        <h1 className="balanced-wrap text-4xl leading-none sm:text-5xl">{title}</h1>
        <p className="balanced-wrap max-w-2xl text-sm leading-7 text-muted sm:text-base">{description}</p>
      </div>
    </div>
  )
}
