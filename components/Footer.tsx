import Link from 'next/link'
import { site } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="mt-20 bg-asili-dark text-white">
      <div className="section-container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-asili-gold">Asili Tech</p>
          <p className="mt-2 text-sm text-gray-200">
            Financial tools and research for informal workers in Africa. Founded by {site.founder}.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-asili-gold">Explore</p>
          <Link href="/products" className="block hover:text-asili-gold">Products</Link>
          <Link href="/research" className="block hover:text-asili-gold">Research</Link>
          <Link href="/progress" className="block hover:text-asili-gold">Progress</Link>
          <Link href="/blog" className="block hover:text-asili-gold">Blog</Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-asili-gold">Contact</p>
          <a href={`mailto:${site.email}`} className="block hover:text-asili-gold">{site.email}</a>
          <Link href="/collaborate" className="block hover:text-asili-gold">Work with us</Link>
        </div>
      </div>
      <div className="border-t border-asili-green py-4 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Asili Tech. All rights reserved.
      </div>
    </footer>
  )
}
