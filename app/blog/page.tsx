import Link from 'next/link'

export const metadata = {
  title: 'Ideas & Updates | Asili Tech',
  description: 'Founder notes and practical perspectives on economic participation, informal work, financial visibility and trusted digital services in Africa.',
}

const posts = [
  {
    href: '/blog/why-im-building-asili-tech',
    date: 'November 2026',
    category: 'Founder story',
    title: 'Why I’m building Asili Tech: infrastructure for economic participation',
    summary: 'The thinking behind Asili Tech, and why financial visibility and professional credibility belong in the same conversation.',
    readTime: '5 min read',
  },
  {
    href: '/blog/why-skills-need-proof-not-just-promotion',
    date: 'November 2026',
    category: 'SkillVault · Future of work',
    title: 'Skills need proof, not just promotion',
    summary: 'Why capable service professionals need more than word-of-mouth: a trusted way to show what they do, how they work and what they have completed.',
    readTime: '6 min read',
  },
  {
    href: '/blog/making-income-visible',
    date: 'November 2026',
    category: 'AMKA · Financial inclusion',
    title: 'Making income visible: a practical first step towards financial resilience',
    summary: 'For people earning from several activities, understanding cash flow can start with a simple, consistent record of money coming in and going out.',
    readTime: '6 min read',
  },
]

export default function Blog() {
  return (
    <div>
      <section className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-asili-gold">Asili Tech journal</p>
          <h1 className="mb-4 text-white">Ideas for a more inclusive economy</h1>
          <p className="text-lg text-gray-100">
            Notes on building useful technology, understanding informal work, and creating better pathways to opportunity across Africa.
          </p>
        </div>
      </section>
      <section className="section-container max-w-4xl py-16">
        <div className="mb-8">
          <h2 className="mb-2 text-2xl">Latest articles</h2>
          <p className="text-gray-600">Perspectives from the work, questions we are exploring, and lessons we hope to learn.</p>
        </div>
        <div className="grid gap-5">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className="card group block transition hover:border-asili-gold">
              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                <span>{post.date}</span><span aria-hidden="true">·</span><span>{post.category}</span><span aria-hidden="true">·</span><span>{post.readTime}</span>
              </div>
              <h2 className="mb-3 text-2xl transition group-hover:text-asili-green">{post.title}</h2>
              <p className="mb-4 text-gray-700">{post.summary}</p>
              <span className="font-semibold text-asili-green">Read article →</span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-gray-500">
          These articles describe the problems we are exploring and the products we are working towards. They are not claims that every proposed feature is already available.
        </p>
      </section>
    </div>
  )
}
