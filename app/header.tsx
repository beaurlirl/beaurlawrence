'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedBackground } from '@/components/ui/animated-background'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const showBreadcrumb = pathname !== '/'

  return (
    <AnimatedBackground
      enableHover
      className="mb-8 w-full min-h-[120px] rounded-2xl bg-zinc-100/30 p-5 sm:min-h-[140px] sm:p-6 dark:bg-zinc-900/60"
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
    >
      <header className="flex items-center justify-between">
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Beau Lawrence
          </Link>
          {showBreadcrumb && (
            <div className="mt-1 text-xs text-zinc-500">
              <Link className="hover:text-zinc-200" href="/">
                Home
              </Link>
              <span className="mx-2 text-zinc-600">/</span>
              <span className="text-zinc-400">{pathname.replace('/', '')}</span>
            </div>
          )}
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            3D Graphic & Brand Designer · Web Development · Architectural Renders
          </TextEffect>
        </div>
        <Link
          href="/feed"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          Feed
        </Link>
      </header>
    </AnimatedBackground>
  )
}
