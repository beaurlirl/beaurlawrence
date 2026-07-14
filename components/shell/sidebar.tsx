'use client'

import { LayoutGridIcon, RocketIcon, MailIcon } from 'lucide-react'
import { Magnetic } from '@/components/ui/magnetic'
import { SIDEBAR_SECTIONS, SOCIAL_LINKS, EMAIL, type SectionId } from '@/app/data'

const ICONS: Record<SectionId, React.ComponentType<{ className?: string }>> = {
  services: LayoutGridIcon,
  projects: RocketIcon,
  contact: MailIcon,
}

type SidebarProps = {
  active: SectionId
  onSelect: (id: SectionId) => void
}

export function Sidebar({ active, onSelect }: SidebarProps) {
  return (
    <aside className="neu-flat fixed top-0 left-0 z-40 hidden h-screen w-64 flex-col justify-between rounded-r-3xl p-6 md:flex">
      <div>
        <p className="font-medium text-zinc-900">Beau Lawrence</p>
        <p className="mt-1 text-xs text-retro-dark">
          3D Graphic & Brand Designer
        </p>

        <nav className="mt-10 flex flex-col gap-3" aria-label="Sidebar">
          {SIDEBAR_SECTIONS.map((section) => {
            const Icon = ICONS[section.id]
            const isActive = section.id === active
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onSelect(section.id)}
                aria-current={isActive}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 active:scale-[0.98] ${
                  isActive ? 'neu-active' : 'neu-raised text-zinc-700 hover:text-zinc-900'
                }`}
              >
                <Icon className="h-5 w-5" />
                {section.label}
              </button>
            )
          })}
        </nav>
      </div>

      <div className="space-y-3">
        <a
          href={`mailto:${EMAIL}`}
          className="block truncate text-xs text-retro-dark hover:text-zinc-900"
        >
          {EMAIL}
        </a>
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map((link) => (
            <Magnetic key={link.label} springOptions={{ bounce: 0 }} intensity={0.3}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-raised flex h-10 w-10 items-center justify-center rounded-full text-xs font-medium text-zinc-700 hover:text-zinc-900"
                aria-label={link.label}
              >
                {link.label.slice(0, 2)}
              </a>
            </Magnetic>
          ))}
        </div>
      </div>
    </aside>
  )
}
