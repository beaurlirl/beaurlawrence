import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#0b0b0c',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://brl.onl/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Beau Lawrence — Portfolio',
    template: '%s | Beau Lawrence',
  },
  description:
    '3D Graphic & Brand Designer, Architectural Renders, and Web Development.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Beau Lawrence',
  },
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
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased text-zinc-900`}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          storageKey="theme"
          defaultTheme="light"
        >
          <div className="min-h-screen w-full font-[family-name:var(--font-inter-tight)]">
            <div className="rgb-blur" aria-hidden="true" />
            <div className="relative z-10">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
