
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const nav = [
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'AMKA', href: '/amka' },
  { name: 'SkillVault', href: '/skillvault' },
  { name: 'Research', href: '/research' },
  { name: 'Progress', href: '/progress' },
  { name: 'Blog', href: '/blog' },
  { name: 'Collaborate', href: '/collaborate' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="section-container flex min-h-[88px] items-center justify-between py-3">
        <Link href="/" aria-label="Asili Tech home" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Asili Tech" className="h-[60px] w-auto max-w-[220px] object-contain md:h-[72px] md:max-w-[260px]" />
        </Link>
        <nav className="hidden items-center gap-5 lg:gap-7 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap text-sm font-semibold text-asili-dark transition-colors duration-200 hover:text-asili-gold">{item.name}</Link>
          ))}
        </nav>
        <button type="button" className="rounded-lg p-2 text-asili-dark transition-colors hover:bg-gray-100 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="border-t border-gray-100 bg-white px-6 pb-6 pt-5 md:hidden">
          <div className="section-container flex flex-col gap-5">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-base font-medium text-asili-dark transition-colors hover:text-asili-gold">{item.name}</Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
