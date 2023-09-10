'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navBar'
const inter = Inter({ subsets: ['latin'] })
import { Providers } from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + ' bg-white dark:bg-gray-800 text-black dark:text-white'}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
