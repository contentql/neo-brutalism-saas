import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neobrutalism Saas template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${dmSans.className} grid min-h-screen grid-rows-[1fr_auto]`}>
        <ThemeProvider attribute='class' disableTransitionOnChange>
          <Navbar />
          <main className='mt-32'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
