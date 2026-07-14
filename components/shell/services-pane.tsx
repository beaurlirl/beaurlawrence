'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Carousel } from '@/components/ui/carousel'
import { SERVICES, type ServiceSlug } from '@/app/data'

type ServicesPaneProps = {
  initialService?: ServiceSlug
}

export function ServicesPane({ initialService }: ServicesPaneProps) {
  const [selected, setSelected] = useState<ServiceSlug>(initialService ?? SERVICES[0].slug)
  const service = SERVICES.find((s) => s.slug === selected) ?? SERVICES[0]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-zinc-900">Services</h2>
        <p className="text-sm text-retro-dark">
          Select a category to explore the work.
        </p>
      </div>

      <div className="neu-flat flex gap-1 rounded-full p-1">
        {SERVICES.map((s) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setSelected(s.slug)}
            aria-current={s.slug === selected}
            className={`flex-1 rounded-full px-3 py-2 text-xs font-medium transition-all duration-300 sm:text-sm ${
              s.slug === selected ? 'neu-active' : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <Carousel
        ariaLabel={`${service.name} gallery`}
        slides={service.images.map((src) => (
          <div
            key={src}
            className={`relative aspect-[4/3] w-full ${
              service.imageBg === 'white' ? 'bg-white' : 'bg-zinc-900'
            }`}
          >
            <Image
              src={src}
              alt={service.name}
              fill
              className={
                service.imageFit === 'contain' ? 'object-contain p-6' : 'object-cover'
              }
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        ))}
      />

      <div className="space-y-2">
        <p className="font-medium text-zinc-900">{service.description}</p>
        <p className="text-sm text-retro-dark">{service.longDescription}</p>
        {service.webPreviewUrl && (
          <a
            href={service.webPreviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-zinc-900 underline"
          >
            View live site →
          </a>
        )}
      </div>
    </div>
  )
}
