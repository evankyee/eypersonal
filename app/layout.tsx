import type { Metadata } from 'next'
import './globals.css'
import 'katex/dist/katex.min.css'
import { siteConfig } from '@/config'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

