import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://asilitech.com'),
  title: 'Asili Tech | Financial intelligence and opportunity for informal work',
  description:
    'Asili Tech is a technology and research venture developing AMKA and SkillVault to support financial visibility, professional credibility and economic opportunity for informal workers in Africa.',
  openGraph: {
    title: 'Asili Tech',
    description: 'Financial tools and research for informal workers in Africa.',
    url: 'https://asilitech.com',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
