import { Header } from '@/components/header'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import { ReactNode, FC } from 'react'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Instasany',
  description: 'Codeboost Project',
}

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
