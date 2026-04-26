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
      <div className={`flex flex-col gap-8 ${compact ? 'max-w-sm' : 'max-w-xl'}`}>
        {sections!.map((section, sectionIndex) => (
          <div key={`section-${sectionIndex}`} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border/60" />
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted whitespace-nowrap px-2">
                {section.section}
              </p>
              <div className="h-px flex-1 bg-border/60" />
            </div>
            <div className="flex flex-col gap-3">
              {section.messages.map((message, index) => {
                const isValery = message.from === 'valery'
                return (
                  <div key={`${section.section}-${message.from}-${index}`} className={`flex ${isValery ? 'justify-start' : 'justify-end'}`}>
                    <div
                      className={[
                        'max-w-[85%] rounded-[1.5rem] px-4 py-3 text-sm leading-6 shadow-sm',
                        isValery
                          ? 'rounded-bl-md bg-white/85 text-text-strong ring-1 ring-border/70'
                          : 'rounded-br-md bg-primary/70 text-text-strong ring-1 ring-primary/60',
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
    <div className={`flex flex-col gap-3 ${compact ? 'max-w-sm' : 'max-w-xl'}`}>
      {messages.map((message, index) => {
        const isValery = message.from === 'valery'

        return (
          <div key={`${message.from}-${index}`} className={`flex ${isValery ? 'justify-start' : 'justify-end'}`}>
            <div
              className={[
                'max-w-[85%] rounded-[1.5rem] px-4 py-3 text-sm leading-6 shadow-sm',
                isValery
                  ? 'rounded-bl-md bg-white/85 text-text-strong ring-1 ring-border/70'
                  : 'rounded-br-md bg-primary/70 text-text-strong ring-1 ring-primary/60',
              ].join(' ')}
            >
              {!compact ? (
                <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted">
                  {isValery ? 'Valery' : 'Yo'}
                </p>
              ) : null}
              <p>{message.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}