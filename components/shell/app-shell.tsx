'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { MailIcon } from 'lucide-react'
import { Sidebar } from './sidebar'
import { MobileTabBar } from './mobile-tab-bar'
import { ServicesPane } from './services-pane'
import { ProjectsPane } from './projects-pane'
import { ContactPane } from './contact-pane'
import { EMAIL, type SectionId, type ServiceSlug } from '@/app/data'

type AppShellProps = {
  initialSection?: SectionId
  initialService?: ServiceSlug
}

export function AppShell({ initialSection = 'services', initialService }: AppShellProps) {
  const [active, setActive] = useState<SectionId>(initialSection)

  return (
    <div className="min-h-screen">
      <Sidebar active={active} onSelect={setActive} />
      <MobileTabBar active={active} onSelect={setActive} />

      <main className="mx-auto w-full max-w-2xl px-4 pt-8 pb-32 md:ml-64 md:max-w-3xl md:px-10 md:pt-16 md:pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {active === 'services' && <ServicesPane initialService={initialService} />}
            {active === 'projects' && <ProjectsPane />}
            {active === 'contact' && <ContactPane />}
          </motion.div>
        </AnimatePresence>
      </main>

      <a
        href={`mailto:${EMAIL}`}
        className="neu-active fixed right-4 bottom-[calc(5.5rem+var(--safe-bottom))] z-50 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium shadow-lg transition-transform active:scale-95 md:right-8 md:bottom-8"
      >
        <MailIcon className="h-4 w-4" />
        Get in touch
      </a>
    </div>
  )
}
