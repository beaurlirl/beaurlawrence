'use client'

import { Magnetic } from '@/components/ui/magnetic'
import { EMAIL, SOCIAL_LINKS } from '@/app/data'

export function ContactView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-medium tracking-tight text-zinc-900">Contact</h1>
        <p className="mt-2 text-retro-dark">
          Feel free to reach out at{' '}
          <a className="text-zinc-900 underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
      </div>

      <div className="flex items-center gap-3">
        {SOCIAL_LINKS.map((link) => (
          <Magnetic key={link.label} springOptions={{ bounce: 0 }} intensity={0.3}>
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-raised rounded-full px-4 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-900"
            >
              {link.label}
            </a>
          </Magnetic>
        ))}
      </div>
    </div>
  )
}
