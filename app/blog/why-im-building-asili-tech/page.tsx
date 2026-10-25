import Link from 'next/link'
import { site } from '@/lib/site'

export const metadata = { title: 'Why I’m building Asili Tech | Asili Tech' }

export default function Post() {
  return (
    <article>
      <header className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <Link href="/blog" className="mb-6 inline-block text-asili-gold hover:text-white">← Back to blog</Link>
          <p className="mb-3 text-sm text-gray-300">October 2026 · Founder story</p>
          <h1 className="text-white">Why I’m building Asili Tech</h1>
        </div>
      </header>

      <div className="section-container prose-body max-w-3xl py-16">
        <p>
          I am from Zimbabwe, and I now live and work in Johannesburg as an AI and machine learning engineer. For most of my
          career I have built technology for people who already had bank accounts, payslips and credit histories. About a year
          ago I started asking a different question: what about everyone who doesn’t?
        </p>
        <p>
          Across Africa, most work is informal. The International Labour Organization estimates that most employment on the
          continent falls outside formal contracts. These are the vendors, hairdressers, artisans, drivers, cleaners and gig
          workers who keep local economies running, and who are routinely invisible to banks, lenders and most financial products.
        </p>
        <p>
          Informal workers rarely have just one income. They juggle several activities, and the decisions about where to spend
          the next hour or the next rand are usually made from memory and instinct. Nobody can see the whole picture, including
          the worker. That is the problem I want to work on.
        </p>
        <p>
          AMKA is my first attempt at it. It is a WhatsApp-based financial assistant, because that is where many people already
          do their business. I have built it and tested it with three users. It is not publicly launched, and I am not going to
          pretend it is. Three users is three real people who trusted something I made, and that matters more to me than a
          larger number I cannot back up.
        </p>
        <p>
          SkillVault is a gig platform for service workers. It is in development, and I am aiming for a beta in about three weeks.
        </p>
        <p>
          I am also studying for an MSc in Financial Engineering at WorldQuant University. My thesis asks how informal workers
          should allocate time and capital across several income sources, and what tools would help them do it well. The products
          are how I collect data. Every design choice is meant to teach me something about how real workers decide, and every
          finding is meant to flow back into the product.
        </p>
        <p>
          Research without building is writing about people instead of with them. Building without research is guessing. I want
          to do both, in the open.
        </p>
        <h2 className="mb-4 mt-12">What I am aiming for</h2>
        <p>
          Over the next two years I want to have a working AMKA with real users, a SkillVault beta, a first analysis of how workers
          earn across activities, and a validation pilot that tests whether better information changes outcomes. I will report
          what I find, including the parts that do not work.
        </p>
        <p>
          If you are an informal worker willing to try AMKA, a researcher working on informal finance, or someone who wants to
          challenge this work, I would like to hear from you. Write to{' '}
          <a href={`mailto:${site.email}`} className="font-semibold text-asili-green underline">{site.email}</a>.
        </p>
        <p className="mt-10 border-t border-gray-200 pt-6 font-semibold text-asili-dark">
          Kwanele Mlalazi<br />
          <span className="font-normal text-gray-600">Founder, Asili Tech</span>
        </p>
      </div>
    </article>
  )
}
