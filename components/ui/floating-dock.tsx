"use client"

import Link from "next/link"

type DockItem = {
  title: string
  href: string
  icon: React.ReactNode
}

type FloatingDockProps = {
  items: DockItem[]
  className?: string
}

export function FloatingDock({ items, className }: FloatingDockProps) {
  return (
    <nav
      aria-label="Primary"
      className={`fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-full border border-zinc-800/80 bg-zinc-950/80 px-3 py-2 backdrop-blur ${className ?? ""}`}
    >
      <ul className="flex items-center justify-between">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              aria-label={item.title}
              className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
