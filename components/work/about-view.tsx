'use client'

import { WORK_EXPERIENCE } from '@/app/data'

export function AboutView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-medium tracking-tight text-zinc-900">Beau Lawrence</h1>
        <p className="mt-2 text-retro-dark">
          3D Graphic & Brand Designer working across brand identity, architectural visualization,
          and web development.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-sm font-medium text-zinc-900">Experience</h2>
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
