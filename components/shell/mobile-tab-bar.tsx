'use client'

import { LayoutGridIcon, RocketIcon, MailIcon } from 'lucide-react'
import { SIDEBAR_SECTIONS, type SectionId } from '@/app/data'

const ICONS: Record<SectionId, React.ComponentType<{ className?: string }>> = {
  services: LayoutGridIcon,
  projects: RocketIcon,
  contact: MailIcon,
}

type MobileTabBarProps = {
  active: SectionId
  onSelect: (id: SectionId) => void
}

export function MobileTabBar({ active, onSelect }: MobileTabBarProps) {
  return (
    <nav
      aria-label="Primary"
      className="neu-flat fixed inset-x-3 bottom-3 z-40 flex items-center justify-between rounded-full p-2 md:hidden"
      style={{ paddingBottom: 'calc(0.5rem + var(--safe-bottom))' }}
    >
      {SIDEBAR_SECTIONS.map((section) => {
        const Icon = ICONS[section.id]
        const isActive = section.id === active
        const isContact = section.id === 'contact'
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => onSelect(section.id)}
            aria-current={isActive}
            aria-label={section.label}
            className={`flex h-12 min-w-[3rem] flex-1 items-center justify-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all duration-300 active:scale-95 ${
              isContact && !isActive
                ? 'bg-zinc-900 text-white'
                : isActive
                  ? 'neu-active'
                  : 'text-zinc-600'
            }`}
          >
            <Icon className="h-5 w-5 shrink-0" />
            <span className={isActive || isContact ? 'inline' : 'hidden'}>
              {section.label === 'Current Projects' ? 'Projects' : section.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
