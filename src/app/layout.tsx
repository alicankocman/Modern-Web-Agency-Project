import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Websitem',
  description: 'Next.js ile oluşturulmuş websitem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}