'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navBar'
const inter = Inter({ subsets: ['latin'] })
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkThemeInLocalStorage = localStorage.theme === 'dark';

    if (isDarkThemeInLocalStorage || (!('theme' in localStorage) && prefersDarkMode)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  return (
    <html lang="en">
      <body className={inter.className + ' bg-white dark:bg-gray-800 text-black dark:text-white'}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
