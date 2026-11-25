import Link from 'next/link'
import { site } from '@/lib/site'

export default function Home() {
  return (
    <div>
      <section className="bg-asili-dark py-20 text-white md:py-28">
        <div className="section-container max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-asili-gold">
            African technology • Practical tools • Applied research
          </p>
          <h1 className="mb-6 text-white">
            Making informal work more visible, understood and connected to opportunity.
          </h1>
          <p className="mb-8 max-w-3xl text-lg text-gray-100 md:text-xl">
            Asili Tech is a technology and research venture focused on the realities of
            informal work across Africa. We are developing tools that help people
            understand their money, demonstrate their capabilities and access
            economic opportunities through AMKA Finance and SkillVault.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/products" className="btn-primary bg-asili-gold text-asili-dark hover:bg-white">
              Explore our products
            </Link>
            <Link href="/progress" className="btn-secondary border-white text-white hover:bg-white hover:text-asili-dark">
              Follow our progress
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <p className="badge mb-4">Current direction — {site.lastUpdated}</p>
        <h2 className="mb-4">Two products. One broader ambition.</h2>
        <p className="mb-10 max-w-3xl text-gray-600">
          Economic participation depends on more than access to financial services.
          It also depends on whether people can understand irregular income, make
          informed decisions, demonstrate their capabilities and access trusted
          opportunities. Our research helps us understand these connected challenges.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <p className="mb-2 text-sm font-semibold text-asili-gold">FINANCIAL INTELLIGENCE</p>
            <h3 className="mb-3">AMKA Finance</h3>
            <p className="mb-4 text-gray-600">
              A WhatsApp-first financial assistant designed to help people in the
              informal economy record income, understand cash flow and make more
              informed financial decisions.
            </p>
            <Link href="/products" className="font-semibold text-asili-green hover:text-asili-gold">
              Explore AMKA →
            </Link>
          </div>
          <div className="card">
            <p className="mb-2 text-sm font-semibold text-asili-gold">PROFESSIONAL IDENTITY & OPPORTUNITY</p>
            <h3 className="mb-3">SkillVault</h3>
            <p className="mb-4 text-gray-600">
              A services marketplace and digital work identity platform helping
              personal-service professionals showcase their skills, connect with
              customers and build a credible history of completed work.
            </p>
            <Link href="/products" className="font-semibold text-asili-green hover:text-asili-gold">
              Explore SkillVault →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-asili-cream py-16">
        <div className="section-container max-w-4xl">
          <h2 className="mb-6">Why this work matters</h2>
          <div className="prose-body">
            <p>
              Across African economies, many people earn through informal, independent
              and multiple income-generating activities. Their financial lives and
              professional capabilities are often poorly represented by systems built
              around formal employment, payslips and conventional CVs.
            </p>
            <p>
              We are exploring how accessible technology can make those realities more
              visible and useful: better records of money, better evidence of skills,
              and stronger connections between people and opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <h2 className="mb-6">How we build</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="mb-3">Start with real problems</h3>
            <p className="text-gray-600">Understand the people, constraints and existing workarounds before choosing features.</p>
          </div>
          <div className="card">
            <h3 className="mb-3">Build and test simply</h3>
            <p className="text-gray-600">Develop focused products, test them with real users and improve from observed behaviour.</p>
          </div>
          <div className="card">
            <h3 className="mb-3">Earn trust through evidence</h3>
            <p className="text-gray-600">Be clear about product maturity, protect user information and publish only supportable results.</p>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid gap-8 rounded-2xl border border-gray-200 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-asili-green">Research-led development</p>
            <h2 className="mb-4">Understand the economy behind the numbers.</h2>
            <p className="text-gray-600">Our research explores multi-income livelihoods, financial decision-making, skills evidence and access to opportunity. It helps shape the questions we ask—not claims of impact we have yet to demonstrate.</p>
          </div>
          <Link href="/research" className="btn-secondary whitespace-nowrap">Explore our research</Link>
        </div>
      </section>

      <section className="bg-asili-dark py-16 text-white">
        <div className="section-container max-w-3xl text-center">
          <h2 className="mb-4 text-white">Build with us</h2>
          <p className="mb-8 text-gray-100">
            We welcome feedback from workers, customers, researchers, potential pilot
            participants and people who can help us build responsibly.
          </p>
          <Link href="/collaborate" className="btn-primary bg-asili-gold text-asili-dark hover:bg-white">
            Collaborate with Asili Tech
          </Link>
        </div>
      </section>
    </div>
  )
}
