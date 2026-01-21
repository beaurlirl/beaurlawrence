import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'
import { FloatingDock } from '@/components/ui/floating-dock'
import {
  HomeIcon,
  BoxesIcon,
  Building2Icon,
  Code2Icon,
  NewspaperIcon,
} from 'lucide-react'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0b0c',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://beaurl.com/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Beau Lawrence — Portfolio',
    template: '%s | Beau Lawrence',
  },
  description:
    '3D Graphic & Brand Designer, Architectural Renders, and Web Development.',
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-[#0b0b0c] tracking-tight antialiased text-zinc-100 dark`}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="rgb-blur" aria-hidden="true" />
            <div className="pointer-events-none fixed inset-0 z-0">
              <BackgroundRippleEffect />
            </div>
            <div className="relative z-10 mx-auto w-full max-w-screen-md flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
            <div className="block sm:hidden">
              <FloatingDock
                items={[
                  { title: 'Home', href: '/', icon: <HomeIcon className="h-5 w-5" /> },
                  {
                    title: '3D & Branding',
                    href: '/3d-branding',
                    icon: <BoxesIcon className="h-5 w-5" />,
                  },
                  {
                    title: 'Architectural',
                    href: '/architectural-renders',
                    icon: <Building2Icon className="h-5 w-5" />,
                  },
                  {
                    title: 'Web Dev',
                    href: '/web-development',
                    icon: <Code2Icon className="h-5 w-5" />,
                  },
                  {
                    title: 'Feed',
                    href: '/feed',
                    icon: <NewspaperIcon className="h-5 w-5" />,
                  },
                ]}
              />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
