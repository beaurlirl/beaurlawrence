'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const showBreadcrumb = pathname !== '/'

  return (
    <div className="mb-8 w-full min-h-[120px] rounded-2xl bg-white/70 p-5 transition-colors hover:bg-black/5 sm:min-h-[140px] sm:p-6">
      <header className="flex items-center justify-between">
        <div>
          <Link href="/" className="font-medium text-zinc-900">
            Beau Lawrence
          </Link>
          {showBreadcrumb && (
            <div className="mt-1 text-xs text-zinc-600">
              <Link className="hover:text-zinc-900" href="/">
                Home
              </Link>
              <span className="mx-2 text-zinc-500">/</span>
              <span className="text-zinc-500">{pathname.replace('/', '')}</span>
            </div>
          )}
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600"
            delay={0.5}
          >
            3D Graphic & Brand Designer · Web Development · Architectural Renders
          </TextEffect>
        </div>
      </header>
    </div>
  )
}
