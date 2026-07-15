'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { SiteHeader } from './site-header'
import { WorkList } from './work-list'
import { AboutView } from './about-view'
import { ContactView } from './contact-view'
import type { SectionId } from '@/app/data'

type SiteShellProps = {
  initialSection?: SectionId
}

export function SiteShell({ initialSection = 'work' }: SiteShellProps) {
  const [active, setActive] = useState<SectionId>(initialSection)

  return (
    <div className="min-h-screen">
      <SiteHeader active={active} onSelect={setActive} />

      <main>
        {active === 'work' && <WorkList />}
        {(active === 'about' || active === 'contact') && (
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-8 sm:py-16"
            >
              {active === 'about' && <AboutView />}
              {active === 'contact' && <ContactView />}
            </motion.div>
          </AnimatePresence>
        )}
      </main>
    </div>
  )
}
