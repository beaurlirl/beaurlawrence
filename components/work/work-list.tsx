'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRightIcon, XIcon } from 'lucide-react'
import { WORK_ITEMS, type WorkItem } from '@/app/data'

const INITIAL_LOOPS = 3
const LOOPS_PER_PAGE = 2
const MAX_LOOPS = 40

const rowClass =
  'group grid w-full grid-cols-[2rem_1fr] items-start gap-3 border-t border-zinc-200 px-4 py-5 text-left transition-colors hover:bg-zinc-50 sm:grid-cols-[3.5rem_1fr_11rem] sm:items-baseline sm:gap-6 sm:px-8 sm:py-7'

function WorkRow({ item, onOpen }: { item: WorkItem; onOpen: () => void }) {
  const hasDetail = Boolean(item.images && item.images.length > 0)

  const inner = (
    <>
      <span className="pt-1 font-[family-name:var(--font-geist-mono)] text-xs text-retro-dark tabular-nums sm:pt-0">
        {item.year}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-2xl font-medium tracking-tight text-zinc-900 transition-colors group-hover:text-retro sm:text-4xl md:text-5xl">
          {item.title}
        </span>
        <span className="mt-1 block text-[11px] tracking-[0.15em] text-retro-dark uppercase sm:hidden">
          {item.category}
        </span>
      </span>
      <span className="hidden text-right text-xs tracking-[0.15em] text-retro-dark whitespace-nowrap uppercase sm:block">
        {item.category}
      </span>
    </>
  )

  if (hasDetail) {
    return (
      <button type="button" onClick={onOpen} className={rowClass}>
        {inner}
      </button>
    )
  }

  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className={rowClass}>
      {inner}
    </a>
  )
}

function WorkDialog({ item, onClose }: { item: WorkItem; onClose: () => void }) {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-[60] bg-white/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div className="pointer-events-none fixed inset-0 z-[61] flex items-center justify-center p-4">
        <motion.div
          className="neu-flat pointer-events-auto max-h-[84vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 sm:p-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="neu-raised absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full"
          >
            <XIcon className="h-4 w-4" />
          </button>

          <p className="text-xs tracking-[0.2em] text-retro-dark uppercase">
            {item.category} — 20{item.year}
          </p>
          <h3 className="mt-2 text-3xl font-medium tracking-tight text-zinc-900">{item.title}</h3>
          {item.description && <p className="mt-4 text-retro-dark">{item.description}</p>}

          {item.images && (
            <div
              className={`mt-6 grid gap-3 ${item.images.length > 1 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}
            >
              {item.images.map((src) => (
                <div
                  key={src}
                  className={`relative aspect-4/3 overflow-hidden rounded-xl ${
                    item.imageBg === 'dark' ? 'bg-zinc-900' : 'bg-white'
                  }`}
                >
                  <Image
                    src={src}
                    alt={item.title}
                    fill
                    className={item.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'}
                    sizes="(max-width: 768px) 90vw, 600px"
                  />
                </div>
              ))}
            </div>
          )}

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-zinc-900 underline"
            >
              Visit site <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          )}
        </motion.div>
      </div>
    </>
  )
}

export function WorkList() {
  const [loops, setLoops] = useState(INITIAL_LOOPS)
  const [openItem, setOpenItem] = useState<WorkItem | null>(null)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setLoops((n) => Math.min(n + LOOPS_PER_PAGE, MAX_LOOPS))
        }
      },
      { rootMargin: '1200px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!openItem) return
    document.body.classList.add('overflow-hidden')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenItem(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('overflow-hidden')
      window.removeEventListener('keydown', onKey)
    }
  }, [openItem])

  const rows = Array.from({ length: loops }).flatMap((_, loop) =>
    WORK_ITEMS.map((item) => ({ item, rowKey: `${item.id}-${loop}` })),
  )

  return (
    <div>
      <div role="list" aria-label="Work">
        {rows.map(({ item, rowKey }) => (
          <WorkRow key={rowKey} item={item} onOpen={() => setOpenItem(item)} />
        ))}
      </div>
      <div ref={sentinelRef} aria-hidden="true" className="h-px" />

      <AnimatePresence>
        {openItem && <WorkDialog item={openItem} onClose={() => setOpenItem(null)} />}
      </AnimatePresence>
    </div>
  )
}
