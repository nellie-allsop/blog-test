import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'croch-og',
  description: 'Your one stop blog for all things crochet-y',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
