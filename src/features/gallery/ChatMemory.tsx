import type { ChatMessage, ChatSection } from './memories.data'

type ChatMemoryProps = {
  messages?: ChatMessage[]
  sections?: ChatSection[]
  compact?: boolean
}

export function ChatMemory({ messages, sections, compact = false }: ChatMemoryProps) {
  const hasSections = sections && sections.length > 0

  if (hasSections) {
    return (
      <div className={`flex flex-col gap-6 ${compact ? 'max-w-sm' : 'max-w-xl'}`}>
        {sections!.map((section, sectionIndex) => (
          <div key={`section-${sectionIndex}`} className="flex flex-col gap-4">
            {/* Separador de sección con elemento floral */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted whitespace-nowrap px-2">
                {section.section}
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            </div>

            {/* Mensajes de la sección */}
            <div className="flex flex-col gap-2.5">
              {section.messages.map((message, index) => {
                const isValery = message.from === 'valery'
                return (
                  <div
                    key={`${section.section}-${message.from}-${index}`}
                    className={`flex ${isValery ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={[
                        'max-w-[85%] rounded-[1.25rem] px-4 py-2.5 text-sm leading-6 shadow-sm',
                        isValery
                          ? 'rounded-bl-md bg-white/90 text-text-strong ring-1 ring-border/50'
                          : 'rounded-br-md bg-primary/80 text-text-strong ring-1 ring-primary/40',
                      ].join(' ')}
                    >
                      <p>{message.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!messages || messages.length === 0) {
    return null
  }

  return (
    <div className={`flex flex-col gap-2.5 ${compact ? 'max-w-sm' : 'max-w-xl'}`}>
      {messages.map((message, index) => {
        const isValery = message.from === 'valery'

        return (
          <div key={`${message.from}-${index}`} className={`flex ${isValery ? 'justify-start' : 'justify-end'}`}>
            <div
              className={[
                'max-w-[85%] rounded-[1.25rem] px-4 py-2.5 text-sm leading-6 shadow-sm',
                isValery
                  ? 'rounded-bl-md bg-white/90 text-text-strong ring-1 ring-border/50'
                  : 'rounded-br-md bg-primary/80 text-text-strong ring-1 ring-primary/40',
              ].join(' ')}
            >
              <p>{message.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}