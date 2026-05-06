import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'cba-saas-ui',
  description:
    'Shared SaaS UI substrate for the CBA portfolio. Tailwind v4 + Radix + TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
