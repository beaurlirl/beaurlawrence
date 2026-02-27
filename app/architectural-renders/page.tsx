import { ProjectGallery } from '@/components/project-gallery'
import { FEATURED_PROJECTS, EMAIL } from '../data'

export default function ArchitecturalRendersPage() {
  const project = FEATURED_PROJECTS['architectural-renders']

  return (
    <main className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-retro">
          Architectural Renders
        </p>
        <h1 className="text-2xl font-medium text-zinc-900">
          Atmosphere-driven visualization for spaces and interiors.
        </h1>
        <p className="text-retro-dark">
          Spatial storytelling with a focus on light, material, and human scale.
          Designed to sell the experience, not just the structure.
        </p>
      </section>

      <section className="space-y-4">
        <ProjectGallery
          images={project.images}
          title={project.title}
          description={project.description}
        />
      </section>

      <p className="text-xs text-retro">
        Want to see more samples of architectural or 3D work?{' '}
        <a
          href={`mailto:${EMAIL}?subject=Consultation — Architectural Renders`}
          className="underline hover:text-retro"
        >
          Reach out for a consultation
        </a>
        .
      </p>
    </main>
  )
}
