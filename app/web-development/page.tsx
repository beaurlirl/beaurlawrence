import Image from 'next/image'
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
