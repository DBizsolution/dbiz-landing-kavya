import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DBiz.ai — Homepage Explorations',
  description: 'Multiple homepage variants for DBiz.ai',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
