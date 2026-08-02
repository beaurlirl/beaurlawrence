'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { EMAIL, NAV_SECTIONS, SOCIAL_LINKS, type SectionId } from '@/app/data'

type SiteHeaderProps = {
  active: SectionId
  onSelect: (id: SectionId) => void
}

// Each collapsible span is hidden (max-w-0) at rest so only the bold
// initials "B" "R" "L" show; hovering opens them up to reveal the rest of
// the name, which reads as the initials sliding apart into place.
const expandClass = (open: boolean, maxWidth: string) =>
  `inline-block overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-300 ease-out ${
    open ? `${maxWidth} opacity-100` : 'max-w-0 opacity-0'
  }`

export function SiteHeader({ active, onSelect }: SiteHeaderProps) {
  const [hovered, setHovered] = useState(false)
  const [mobileCardOpen, setMobileCardOpen] = useState(false)
  const instagram = SOCIAL_LINKS.find((link) => link.label === 'Instagram')
  const secondaryNav = NAV_SECTIONS.filter((section) => section.id !== 'work')

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-sm"
        style={{ paddingTop: 'var(--safe-top)' }}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-8">
          {/* Desktop: initials slide open into the full name on hover */}
          <button
            type="button"
            onClick={() => onSelect('work')}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            aria-label="Beau R Lawrence — Home"
            className="hidden shrink-0 items-baseline text-xl font-bold tracking-tight text-zinc-900 sm:inline-flex sm:text-2xl"
          >
            <span>B</span>
            <span className={expandClass(hovered, 'max-w-[3.5ch]')}>eau</span>
            <span className={expandClass(hovered, 'max-w-[1ch]')}>&nbsp;</span>
            <span>R</span>
            <span className={expandClass(hovered, 'max-w-[1ch]')}>&nbsp;</span>
            <span>L</span>
            <span className={expandClass(hovered, 'max-w-[8ch]')}>awrence</span>
          </button>

          {/* Mobile: tap opens the contact card */}
          <button
            type="button"
            onClick={() => setMobileCardOpen(true)}
            aria-label="Show contact info"
            className="shrink-0 text-xl font-bold tracking-tight text-zinc-900 sm:hidden"
          >
            BRL
          </button>

          <nav aria-label="Primary" className="flex flex-1 items-baseline justify-end gap-3 sm:justify-start sm:gap-5">
            {secondaryNav.map((section) => {
              const isActive = section.id === active
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => onSelect(section.id)}
                  aria-current={isActive}
                  className={`text-xs font-medium tracking-[0.15em] uppercase transition-colors sm:text-sm ${
                    isActive ? 'text-zinc-900' : 'text-retro-dark hover:text-zinc-900'
                  }`}
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

      {/* Desktop hover: blur the page behind the header to spotlight the name */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-40 bg-white/40 backdrop-blur-md transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Mobile: tap opens a blurred card with name, email, and Instagram */}
      <AnimatePresence>
        {mobileCardOpen && (
          <div className="sm:hidden">
            <motion.div
              className="fixed inset-0 z-[70] bg-white/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileCardOpen(false)}
            />
            <div
              className="pointer-events-none fixed inset-x-4 z-[71] flex justify-center"
              style={{ top: 'calc(var(--safe-top) + 4.5rem)' }}
            >
              <motion.div
                className="neu-flat pointer-events-auto relative w-full max-w-xs rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                role="dialog"
                aria-modal="true"
                aria-label="Contact info"
              >
                <button
                  type="button"
                  onClick={() => setMobileCardOpen(false)}
                  aria-label="Close"
                  className="neu-raised absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full"
                >
                  <XIcon className="h-4 w-4" />
                </button>
                <p className="text-lg font-bold tracking-tight text-zinc-900">Beau R Lawrence</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-3 block text-sm text-retro-dark hover:text-zinc-900"
                >
                  {EMAIL}
                </a>
                {instagram && (
                  <a
                    href={instagram.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-retro-dark hover:text-zinc-900"
                  >
                    Instagram
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
