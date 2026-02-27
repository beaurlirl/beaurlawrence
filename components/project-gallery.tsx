'use client'

import Image from 'next/image'

type ProjectGalleryProps = {
  images: string[]
  title: string
  description: string
  placeholder?: string
  imageFit?: 'cover' | 'contain'
  imageBg?: 'dark' | 'white'
  webPreviewUrl?: string
}

export function ProjectGallery({
  images,
  title,
  description,
  placeholder = '/projects/placeholder.svg',
  imageFit = 'cover',
  imageBg = 'dark',
  webPreviewUrl,
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
          images.length === 1 && !webPreviewUrl
            ? 'grid-cols-1'
            : 'grid-cols-1 sm:grid-cols-2'
        }`}
      >
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`overflow-hidden rounded-2xl border ${
              imageBg === 'white'
                ? 'border-zinc-200/80 bg-white'
                : 'border-zinc-800/80 bg-zinc-950/60'
            }`}
          >
            <div
              className={`relative aspect-[4/3] w-full ${
                imageBg === 'white' ? 'bg-white p-6' : 'bg-zinc-800/40'
              }`}
            >
              <Image
                src={src}
                alt={`${title} — image ${i + 1}`}
                fill
                className={
                  imageFit === 'contain'
                    ? 'object-contain object-center'
                    : 'object-cover'
                }
                sizes={
                  images.length === 1 && !webPreviewUrl
                    ? '(max-width: 768px) 100vw, 672px'
                    : '(max-width: 768px) 100vw, 50vw'
                }
                unoptimized
              />
            </div>
          </div>
        ))}
        {webPreviewUrl && (
          <div
            className={`overflow-hidden rounded-2xl border ${
              imageBg === 'white'
                ? 'border-zinc-200/80 bg-white'
                : 'border-zinc-800/80 bg-zinc-950/60'
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
              <iframe
                src={webPreviewUrl}
                title={`${title} — live site`}
                className="absolute inset-0 h-full w-full border-0"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
            <a
              href={webPreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-t border-zinc-200/80 px-4 py-3 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
            >
              View live site →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
