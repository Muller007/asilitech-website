import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://asilitech.com'),
  title: 'Asili Tech | Financial tools and research for informal workers',
  description:
    'Asili Tech builds AMKA, a WhatsApp financial assistant, and SkillVault, a gig platform, for informal workers in Africa. Research on how they allocate time and money.',
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
