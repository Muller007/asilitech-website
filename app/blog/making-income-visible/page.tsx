import Link from 'next/link'
import { site } from '@/lib/site'

export const metadata = {
  title: 'Making income visible | Asili Tech',
  description: 'Why simple, consistent income and expense records can help people with multiple income streams understand their cash flow.',
}

export default function Post() {
  return (
    <article>
      <header className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <Link href="/blog" className="mb-6 inline-block text-asili-gold hover:text-white">← Back to blog</Link>
          <p className="mb-3 text-sm text-gray-300">November 2026 · AMKA · Financial inclusion · 6 min read</p>
          <h1 className="text-white">Making income visible: a practical first step towards financial resilience</h1>
        </div>
      </header>
      <div className="section-container max-w-4xl pt-8">
        <img src="/blog/amka-market-business.webp" alt="A small market business owner using a smartphone" className="aspect-[16/9] w-full rounded-2xl object-cover shadow-sm" fetchPriority="high" />
      </div>
      <div className="section-container prose-body max-w-3xl py-16">
        <p>Imagine earning money from three different activities in the same week. You sell food on some days, take on occasional cleaning work and receive payments for a service you provide from home. Money comes in at different times, and expenses are paid in cash, by bank transfer or through a mobile wallet.</p>
        <p>At the end of the week, the question is not simply how much money came in. It is how much remains after stock, transport, data, supplies, household costs and other commitments. When income and expenses are spread across activities and payment methods, it can be difficult to see the full picture.</p>
        <p>This is not necessarily a budgeting problem. It can be an information problem. If records are incomplete or depend entirely on memory, it becomes harder to understand which activities are generating income, which costs are rising and when cash may be tight.</p>
        <h2 className="mb-4 mt-12">A record is a starting point, not a judgement</h2>
        <p>Financial tracking does not need to begin with complex accounting software. A useful first step is to record money coming in and money going out, with a date, amount, category and short note. Over time, those entries can help answer practical questions:</p>
        <ul>
          <li>How much did I receive from each activity this week?</li>
          <li>Which costs are necessary to keep each activity running?</li>
          <li>What money is available for household needs, savings or reinvestment?</li>
          <li>Are there days or weeks when income is usually lower?</li>
          <li>Which details do I need to keep so I can make better decisions later?</li>
        </ul>
        <p>Records are only useful when people can maintain them. A tool that requires too much typing, too many steps or unfamiliar financial language may be abandoned. The best starting point is a method that fits into an existing routine and makes it easy to correct mistakes.</p>
        <h2 className="mb-4 mt-12">Why visibility matters</h2>
        <p>Better records do not guarantee higher income, access to credit or financial security. They can, however, give a person a clearer basis for decisions. They may help someone identify a cost they had overlooked, compare the performance of different activities or prepare more organised information when speaking with a supplier, adviser or financial institution.</p>
        <p>There are important limits. Income can be irregular, household and business money can overlap, and not every person wants to share financial information with a digital service. Any product handling this information must explain what it collects, why it collects it, how it is protected and how a user can access or delete it. Privacy and user control are not optional extras.</p>
        <h2 className="mb-4 mt-12">The thinking behind AMKA</h2>
        <p>AMKA is being developed as a WhatsApp-first financial assistant. The product direction is to make it easier for people to record income and expenses through a familiar messaging channel and build a more understandable view of cash flow over time.</p>
        <p>Starting with WhatsApp is a practical design choice, not a claim that every person uses it or that messaging alone solves financial exclusion. The product still needs to prove that the experience is useful, understandable, secure and reliable for the people it is intended to serve.</p>
        <p>The first goal is modest: help users create and review clearer records. More advanced analysis should come only after the basic information is accurate and people understand how it is being used. AMKA is an early product initiative, not a publicly available financial service, lender or credit-scoring guarantee.</p>
        <h2 className="mb-4 mt-12">Design around real financial lives</h2>
        <p>People should not have to organise their lives around the assumptions built into a financial app. Tools should adapt to different income patterns, languages, levels of digital confidence and ways of doing business. That requires listening, testing and being willing to change the design when it does not fit.</p>
        <p>At Asili Tech, this is the problem we want AMKA to help explore: how can simple, trustworthy financial records make everyday decisions a little clearer? The answer will come from careful product development and learning with users—not from promising that an app can fix every structural barrier.</p>
        <p>If you would like to share your experience managing income from different activities, or contribute to early product discovery, contact <a href={`mailto:${site.email}`} className="font-semibold text-asili-green underline">{site.email}</a>.</p>
      </div>
    </article>
  )
}
