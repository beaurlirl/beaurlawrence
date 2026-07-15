'use client'

import { EMAIL, NAV_SECTIONS, SOCIAL_LINKS, type SectionId } from '@/app/data'

type SiteHeaderProps = {
  active: SectionId
  onSelect: (id: SectionId) => void
}

export function SiteHeader({ active, onSelect }: SiteHeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-sm"
      style={{ paddingTop: 'var(--safe-top)' }}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-8">
        <button
          type="button"
          onClick={() => onSelect('work')}
          aria-label="Home"
          className="text-xs font-semibold tracking-tight text-zinc-900"
        >
          BL
        </button>

        <nav aria-label="Primary" className="flex flex-1 items-baseline gap-3 sm:gap-5">
          {NAV_SECTIONS.map((section) => {
            const isActive = section.id === active
            const isWork = section.id === 'work'
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onSelect(section.id)}
                aria-current={isActive}
                className={`transition-colors ${
                  isWork
                    ? 'text-xl font-bold tracking-tight sm:text-2xl'
                    : 'text-xs font-medium tracking-[0.15em] uppercase sm:text-sm'
                } ${isActive ? 'text-zinc-900' : 'text-retro-dark hover:text-zinc-900'}`}
              >
                {section.label}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="hidden text-xs text-retro-dark hover:text-zinc-900 sm:inline"
          >
            {EMAIL}
          </a>
          <div className="flex items-center gap-1.5">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="neu-raised flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-medium text-zinc-700 hover:text-zinc-900"
              >
                {link.label.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
