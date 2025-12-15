import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Portfolio',
  description: 'Moje projekty',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50 font-sans">
        {children}
      </body>
    </html>
  )
}
