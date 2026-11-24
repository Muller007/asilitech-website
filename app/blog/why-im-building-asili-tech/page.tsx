import Link from 'next/link'
import { site } from '@/lib/site'

export const metadata = {
  title: 'Why I’m building Asili Tech | Asili Tech',
  description: 'The founder story behind Asili Tech and its work on financial visibility, professional identity and economic participation.',
}

export default function Post() {
  return (
    <article>
      <header className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <Link href="/blog" className="mb-6 inline-block text-asili-gold hover:text-white">← Back to blog</Link>
          <p className="mb-3 text-sm text-gray-300">November 2026 · Founder story · 5 min read</p>
          <h1 className="text-white">Why I’m building Asili Tech: infrastructure for economic participation</h1>
        </div>
      </header>
      <div className="section-container max-w-4xl pt-8">
        <img src="/blog/asili-founder-johannesburg.webp" alt="Johannesburg skyline at sunset" className="aspect-[16/9] w-full rounded-2xl object-cover shadow-sm" fetchPriority="high" />
      </div>
      <div className="section-container prose-body max-w-3xl py-16">
        <p>I started Asili Tech with a question: what would technology look like if it began with the realities of how people across Africa actually work, earn and build livelihoods?</p>
        <p>Too often, digital products are designed around a narrow picture of economic life: one employer, one payslip, one bank account and a neat record of income. That picture does not describe everyone. Many people combine self-employment, casual work, small businesses and service jobs. Others have valuable skills but no formal credential or consistent way to demonstrate the quality of their work.</p>
        <p>These are not signs that people lack ability or ambition. They are signs that many systems do not recognise the way people participate in the economy. A person can be productive and reliable while still being difficult to assess through conventional documents.</p>
        <p>Asili Tech is a founder-led technology venture based in Johannesburg. Its focus is practical infrastructure for economic participation: tools that can help people understand their finances, make their capabilities visible and connect with opportunities. The aim is not to build technology for its own sake. It is to work on specific problems with the people who experience them.</p>
        <h2 className="mb-4 mt-12">Two products, one broader purpose</h2>
        <p><strong>AMKA</strong> explores the financial side of this challenge. It is being developed as a WhatsApp-first financial assistant that can help people keep track of income and expenses and build a clearer picture of cash flow. The starting point is deliberately practical: useful records and better visibility, not promises of loans, credit approval or instant financial transformation.</p>
        <p><strong>SkillVault</strong> explores the professional side. It is being shaped as a services marketplace and digital work identity for people whose skills are often demonstrated through completed jobs, customer relationships and reputation rather than formal CVs. The initial product direction is focused on personal services, including hair, beauty and grooming professionals, with a limited Johannesburg pilot planned before any wider expansion.</p>
        <p>The products address different moments in a person's economic life. AMKA asks how someone can better understand the money they earn. SkillVault asks how someone can make their capabilities easier to discover, assess and trust. Both begin with a simple belief: people should not have to be invisible because their work does not fit a conventional system.</p>
        <h2 className="mb-4 mt-12">Build carefully, learn honestly</h2>
        <p>I am a Computer Science graduate from the University of the People and am pursuing an MSc in Financial Engineering at WorldQuant University. My interests include applied AI, financial engineering and data-driven tools. That background shapes how I approach the work, but it does not replace the need to listen to users, test assumptions and measure whether a product is genuinely useful.</p>
        <p>Asili Tech is still early. AMKA and SkillVault are at different stages of development and validation; neither should be mistaken for a fully launched, Africa-wide service. We are defining the problems, refining product requirements and looking for the right people and communities with whom to test the ideas responsibly.</p>
        <p>I want to build in the open: explain what we are trying, distinguish plans from working features, and share what we learn—including what does not work. Trust is difficult to earn and easy to damage. Honest communication is part of the product.</p>
        <h2 className="mb-4 mt-12">The direction</h2>
        <p>The long-term ambition is to contribute to an economy in which more people can understand their financial position, demonstrate their skills and access opportunities with greater confidence. We will earn the right to expand by solving focused problems first, listening to the people affected and showing evidence of value.</p>
        <p>If you are a service professional, a potential customer, a researcher or an organisation working on inclusive economic opportunity, I would welcome a thoughtful conversation. You can reach us at <a href={`mailto:${site.email}`} className="font-semibold text-asili-green underline">{site.email}</a>.</p>
        <p className="mt-10 border-t border-gray-200 pt-6 font-semibold text-asili-dark">Kwanele Mlalazi<br /><span className="font-normal text-gray-600">Founder, Asili Tech</span></p>
      </div>
    </article>
  )
}
