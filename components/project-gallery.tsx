'use client'

import Image from 'next/image'

type ProjectGalleryProps = {
  images: string[]
  title: string
  description: string
  placeholder?: string
}

export function ProjectGallery({
  images,
  title,
  description,
  placeholder = '/projects/placeholder.svg',
}: ProjectGalleryProps) {
  if (images.length === 0) {
    return (
      <div className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60">
        <div className="relative aspect-video w-full bg-zinc-800/40">
          <Image
            src={placeholder}
            alt={title}
            fill
            className="object-cover opacity-60"
            sizes="(max-width: 768px) 100vw, 672px"
            unoptimized
          />
        </div>
        <div className="space-y-1 p-4">
          <h2 className="text-lg font-medium text-zinc-100">{title}</h2>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-lg font-medium text-zinc-100">{title}</h2>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
      <div
        className={`grid gap-4 ${
          images.length === 1
            ? 'grid-cols-1'
            : images.length === 2
              ? 'grid-cols-1 sm:grid-cols-2'
              : 'grid-cols-1 sm:grid-cols-2'
        }`}
      >
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60"
          >
            <div className="relative aspect-[4/3] w-full bg-zinc-800/40">
              <Image
                src={src}
                alt={`${title} — image ${i + 1}`}
                fill
                className="object-cover"
                sizes={
                  images.length === 1
                    ? '(max-width: 768px) 100vw, 672px'
                    : '(max-width: 768px) 100vw, 50vw'
                }
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
