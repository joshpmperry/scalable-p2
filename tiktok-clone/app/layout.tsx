import type { Metadata } from 'next'
import './globals.css'
import AuthOverlay from './Components/AuthOverlay'


export const metadata: Metadata = {
  title: 'Tiktok-Clone',
  description: 'Tiktok-Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <AuthOverlay />
        {children}
      </body>
    </html>
  )
}
