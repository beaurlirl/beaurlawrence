import { ProjectGallery } from '@/components/project-gallery'
import { FEATURED_PROJECTS, EMAIL } from '../data'

export default function ThreeDBrandingPage() {
  const project = FEATURED_PROJECTS['3d-branding']

  return (
    <main className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          3D & Brand Identities
        </p>
        <h1 className="text-2xl font-medium text-zinc-100">
          Immersive visual systems and product narratives.
        </h1>
        <p className="text-zinc-400">
          Brand worlds built from concept, texture, and motion. From packaging
          to hero renders, each piece is designed to feel tactile and premium.
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
        Want to see more samples of graphic or 3D work?{' '}
        <a
          href={`mailto:${EMAIL}?subject=Consultation — 3D & Brand Work`}
          className="underline hover:text-zinc-400"
        >
          Reach out for a consultation
        </a>
        .
      </p>
    </main>
  )
}
