'use client'

import { Carousel } from '@/components/ui/carousel'
import { CURRENT_PROJECTS } from '@/app/data'

export function ProjectsPane() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-zinc-900">Current Projects</h2>
        <p className="text-sm text-retro-dark">Live and in progress.</p>
      </div>

      <Carousel
        ariaLabel="Current projects"
        slides={CURRENT_PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="neu-raised flex min-h-[220px] flex-col justify-between rounded-2xl p-6 transition-transform active:scale-[0.98]"
          >
            <span className="text-xs font-medium tracking-[0.2em] text-retro uppercase">
              Live
            </span>
            <div>
              <p className="text-xl font-medium text-zinc-900">{project.name}</p>
              {project.description && (
                <p className="mt-2 text-sm text-retro-dark">{project.description}</p>
              )}
            </div>
          </a>
        ))}
      />
    </div>
  )
}
