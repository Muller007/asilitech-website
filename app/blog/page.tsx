import Link from 'next/link'

export const metadata = { title: 'Blog | Asili Tech' }

export default function Blog() {
  return (
    <div>
      <section className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <h1 className="mb-4 text-white">Blog</h1>
          <p className="text-lg text-gray-100">Notes on building Asili Tech, and on the research behind it.</p>
        </div>
      </section>

      <section className="section-container max-w-3xl py-16">
        <Link href="/blog/why-im-building-asili-tech" className="card block transition hover:border-asili-gold">
          <p className="mb-2 text-sm text-gray-500">October 2026 · Founder story</p>
          <h2 className="mb-3 text-2xl">Why I’m building Asili Tech</h2>
          <p className="text-gray-700">My vision, my story, and what I am aiming for over the next two years.</p>
        </Link>
      </section>
    </div>
  )
}
