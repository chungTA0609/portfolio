import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Chunglnt's Portfolio",
  description: 'Created by Chunglnt',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
