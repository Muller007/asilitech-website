import Link from 'next/link'
import { site } from '@/lib/site'

export default function Home() {
  return (
    <div>
      <section className="bg-asili-dark py-20 text-white md:py-28">
        <div className="section-container max-w-3xl">
          <h1 className="mb-6 text-white">Financial tools and research for Africa’s informal workers</h1>
          <p className="mb-8 text-lg text-gray-100 md:text-xl">
            Asili Tech builds AMKA, a WhatsApp financial assistant, and SkillVault, a gig platform for service workers.
            Both products are part of a research project on how informal workers decide where to spend their time and money.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/about" className="btn-primary bg-asili-gold text-asili-dark hover:bg-white">Read the founder’s story</Link>
            <Link href="/progress" className="btn-secondary border-white text-white hover:bg-white hover:text-asili-dark">See where we are</Link>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <p className="badge mb-4">Where we are today — {site.lastUpdated}</p>
        <h2 className="mb-10">Honest status</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <p className="mb-2 text-sm font-semibold text-asili-gold">AMKA Finance</p>
            <h3 className="mb-3">Built and tested</h3>
            <p className="text-gray-600">The code is written and has been tested with 3 users. It is not publicly launched yet.</p>
          </div>
          <div className="card">
            <p className="mb-2 text-sm font-semibold text-asili-gold">SkillVault</p>
            <h3 className="mb-3">In development</h3>
            <p className="text-gray-600">The platform is not ready for users yet. A beta is targeted in about three weeks.</p>
          </div>
          <div className="card">
            <p className="mb-2 text-sm font-semibold text-asili-gold">Research</p>
            <h3 className="mb-3">Starting now</h3>
            <p className="text-gray-600">The thesis proposal is drafted. Phase 1 data collection is beginning with the first AMKA users.</p>
          </div>
        </div>
      </section>

      <section className="bg-asili-cream py-16">
        <div className="section-container max-w-3xl">
          <h2 className="mb-6">Why this matters</h2>
          <p className="prose-body">
            The International Labour Organization estimates that most employment in Africa is informal. These are the vendors,
            hairdressers, artisans, drivers, cleaners and gig workers who keep local economies running. Most of them have no
            payslip, no formal contract and often no credit history, so banks and most fintech products cannot see them.
          </p>
          <p className="prose-body">
            Many informal workers also earn from several activities at once. Decisions about which activity to pursue are
            usually made from memory and instinct. Asili Tech aims to give workers a clearer picture of their own income, and
            to learn from their choices in a way that is shared openly.
          </p>
        </div>
      </section>

      <section className="section-container py-16">
        <h2 className="mb-10">What we are building</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="mb-3">AMKA Finance</h3>
            <p className="mb-4 text-gray-600">A WhatsApp-based financial assistant for informal workers. It meets people where they already do business.</p>
            <Link href="/products" className="font-semibold text-asili-green hover:text-asili-gold">Learn more →</Link>
          </div>
          <div className="card">
            <h3 className="mb-3">SkillVault</h3>
            <p className="mb-4 text-gray-600">A gig platform connecting service workers with clients, with earnings tracking built in.</p>
            <Link href="/products" className="font-semibold text-asili-green hover:text-asili-gold">Learn more →</Link>
          </div>
        </div>
      </section>

      <section className="bg-asili-dark py-16 text-white">
        <div className="section-container max-w-3xl text-center">
          <h2 className="mb-4 text-white">Get involved</h2>
          <p className="mb-8 text-gray-100">
            Informal workers willing to try AMKA, researchers in informal finance, and advisors are all welcome.
          </p>
          <Link href="/collaborate" className="btn-primary bg-asili-gold text-asili-dark hover:bg-white">Work with us</Link>
        </div>
      </section>
    </div>
  )
}
