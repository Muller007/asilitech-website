'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const nav = [
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Research', href: '/research' },
  { name: 'Progress', href: '/progress' },
  { name: 'Blog', href: '/blog' },
  { name: 'Collaborate', href: '/collaborate' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="section-container flex items-center justify-between py-2">
        <Link href="/" aria-label="Asili Tech home">
          <img src="/logo.png" alt="Asili Tech logo" className="h-14 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-asili-dark hover:text-asili-gold">
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="section-container flex flex-col gap-4 pb-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-asili-dark"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
