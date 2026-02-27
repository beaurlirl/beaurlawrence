import { ProjectGallery } from '@/components/project-gallery'
import { FEATURED_PROJECTS, EMAIL } from '../data'

export default function WebDevelopmentPage() {
  const project = FEATURED_PROJECTS['web-development']

  return (
    <main className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-retro">
          Web Development
        </p>
        <h1 className="text-2xl font-medium text-zinc-900">
          Clean, fast, and brand-forward digital experiences.
        </h1>
        <p className="text-retro-dark">
          High-performance websites built to feel premium and convert with
          clarity. Strategy, design, and implementation in one flow.
        </p>
      </section>

      <section className="space-y-4">
        <ProjectGallery
          images={project.images}
          title={project.title}
          description={project.description}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-medium text-zinc-900">Live projects</h2>
        <div className="flex flex-col gap-2">
          <a
            href="https://plaza.onl/home"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-zinc-200/70 bg-white/60 px-4 py-3 text-sm text-retro-dark transition-colors hover:border-zinc-400/60 hover:text-zinc-900"
          >
            <span className="font-medium text-zinc-900">plaza.onl</span>
            <span className="text-xs uppercase tracking-[0.2em] text-retro">
              Live
            </span>
          </a>
          <a
            href="https://github.com/beaurlirl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-zinc-200/70 bg-white/60 px-4 py-3 text-sm text-retro-dark transition-colors hover:border-zinc-400/60 hover:text-zinc-900"
          >
            <span className="font-medium text-zinc-900">GitHub</span>
            <span className="text-xs uppercase tracking-[0.2em] text-retro">
              Live
            </span>
          </a>
        </div>
      </section>

      <p className="text-xs text-retro">
        Want to see more samples of web design work?{' '}
        <a
          href={`mailto:${EMAIL}?subject=Consultation — Web Development`}
          className="underline hover:text-retro"
        >
          Reach out for a consultation
        </a>
        .
      </p>
    </main>
  )
}
