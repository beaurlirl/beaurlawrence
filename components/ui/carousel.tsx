'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

type CarouselProps = {
  slides: React.ReactNode[]
  ariaLabel: string
  className?: string
}

export function Carousel({ slides, ariaLabel, className }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className={className}>
      <div
        className="touch-pan-y overflow-hidden rounded-2xl"
        ref={emblaRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
      >
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              className="min-w-0 flex-[0_0_100%]"
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="neu-raised flex h-11 w-11 items-center justify-center rounded-full text-zinc-900 transition-transform active:scale-95"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === selectedIndex}
                className={`h-2 rounded-full transition-all ${
                  i === selectedIndex ? 'w-6 bg-zinc-900' : 'w-2 bg-zinc-300'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className="neu-raised flex h-11 w-11 items-center justify-center rounded-full text-zinc-900 transition-transform active:scale-95"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}
