"use client"
import './globals.css'
import { Karla } from 'next/font/google'
import { BrowserRouter } from 'react-router-dom'

const borel = Karla({
  weight: '600',
  subsets: ['latin'],
})

export const metadata = {
  title: 'My Portfolio',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BrowserRouter>
        <body className={borel.className}>{children}</body>
      </BrowserRouter>

    </html>
  )
}
