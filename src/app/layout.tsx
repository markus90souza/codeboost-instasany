import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import { ReactNode, FC } from 'react'

const epilogue = Epilogue({
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
      <body className={epilogue.className}>{children}</body>
    </html>
  )
}

export default RootLayout
