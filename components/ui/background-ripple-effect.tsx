'use client'

import { useEffect, useRef } from 'react'

export function BackgroundRippleEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width)
      const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height)
      container.style.setProperty('--mx', `${x}px`)
      container.style.setProperty('--my', `${y}px`)
      container.style.setProperty('--ripple-opacity', '1')
    }

    const handleLeave = () => {
      container.style.setProperty('--ripple-opacity', '0')
    }

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerleave', handleLeave)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={
        {
          '--mx': '50%',
          '--my': '50%',
          '--ripple-opacity': '0',
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px),
            radial-gradient(420px circle at var(--mx) var(--my), rgba(255, 220, 140, 0.7), transparent 55%)
          `,
          backgroundSize: '56px 56px, 56px 56px, 100% 100%',
          opacity: 'var(--ripple-opacity)',
          transition: 'opacity 300ms ease',
        } as React.CSSProperties
      }
    />
  )
}
