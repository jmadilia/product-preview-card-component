import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Preview Card Component',
  description: 'Created by @jmadilia on FrontendMentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
