import Image from 'next/image'
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
        <div className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60">
          <div className="relative aspect-video w-full bg-zinc-800/40">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
              unoptimized
            />
          </div>
          <div className="space-y-1 p-4">
            <h2 className="text-lg font-medium text-zinc-100">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-400">{project.description}</p>
          </div>
        </div>
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
