import { ProjectGallery } from '@/components/project-gallery'
import { FEATURED_PROJECTS, EMAIL } from '../data'

export default function WebDevelopmentPage() {
  const project = FEATURED_PROJECTS['web-development']

  return (
    <main className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Web Development
        </p>
        <h1 className="text-2xl font-medium text-zinc-100">
          Clean, fast, and brand-forward digital experiences.
        </h1>
        <p className="text-zinc-400">
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

      <p className="text-xs text-zinc-500">
        Want to see more samples of web design work?{' '}
        <a
          href={`mailto:${EMAIL}?subject=Consultation — Web Development`}
          className="underline hover:text-zinc-400"
        >
          Reach out for a consultation
        </a>
        .
      </p>
    </main>
  )
}
