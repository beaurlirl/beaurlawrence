'use client'

import { Magnetic } from '@/components/ui/magnetic'
import { EMAIL, SOCIAL_LINKS, WORK_EXPERIENCE } from '@/app/data'

export function ContactPane() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-medium text-zinc-900">Contact</h2>
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

      <div>
        <h3 className="mb-3 text-sm font-medium text-zinc-900">Experience</h3>
        <div className="flex flex-col gap-3">
          {WORK_EXPERIENCE.map((job) => {
            const content = (
              <>
                <div>
                  <p className="text-sm font-medium text-zinc-900">{job.title}</p>
                  <p className="text-xs text-retro-dark">{job.company}</p>
                </div>
                <span className="text-xs tracking-[0.2em] text-retro uppercase">
                  {job.start} – {job.end}
                </span>
              </>
            )
            return job.link ? (
              <a
                key={job.id}
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-flat flex items-center justify-between rounded-xl px-4 py-3 transition-colors hover:text-zinc-900"
              >
                {content}
              </a>
            ) : (
              <div
                key={job.id}
                className="neu-flat flex items-center justify-between rounded-xl px-4 py-3"
              >
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
