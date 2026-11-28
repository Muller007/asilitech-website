import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Wallet, UsersRound } from 'lucide-react'
import { site } from '@/lib/site'

export const metadata = {
  title: 'Products | Asili Tech',
  description: 'Explore AMKA Finance and SkillVault, two product initiatives designed around financial understanding and professional opportunity.',
}

export default function Products() {
  return (
    <div>
      <section className="relative overflow-hidden bg-asili-dark text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(212,160,63,0.2),transparent_35%)]" />
        <div className="section-container relative max-w-7xl py-16 md:py-24">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-asili-gold">Our products</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">Tools for the way people really work and earn.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Two distinct product initiatives. One shared ambition: make financial lives easier to understand and professional capabilities easier to recognise.</p>
        </div>
      </section>

      <section className="section-container max-w-7xl space-y-12 py-16 md:py-24">
        <article className="grid overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm md:grid-cols-2">
          <div className="relative min-h-[300px] md:min-h-[480px]">
            <Image src="/blog/amka-market-business.webp" alt="Small business owner working with her phone" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-asili-dark/55 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-asili-green">Financial intelligence</p>
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3"><span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">Early product initiative</span><span className="text-xs font-semibold uppercase tracking-wider text-gray-400">01 / AMKA</span></div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">AMKA Finance</h2>
            <p className="mt-5 leading-8 text-gray-600">AMKA is a WhatsApp-first financial assistant for people in the informal economy. The product direction is to make it easier to record income and expenses, understand cash flow across activities and make decisions using a clearer picture of their finances.</p>
            <p className="mt-4 leading-8 text-gray-600">The longer-term ambition is to turn consented, appropriately protected financial records into useful insights. Any financial or credit-related use must be developed with suitable safeguards and partners; AMKA does not promise access to loans or improved credit outcomes.</p>
            <div className="mt-7 flex items-center gap-3 text-sm text-asili-green"><Wallet size={19} /><span className="font-semibold">Accessible financial understanding</span></div>
            <a href={`mailto:${site.email}?subject=AMKA%20enquiry`} className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-asili-green px-6 py-3 font-bold text-white transition hover:bg-asili-dark">Enquire about AMKA <ArrowRight size={17} /></a>
          </div>
        </article>

        <article className="grid overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm md:grid-cols-2">
          <div className="relative min-h-[300px] md:order-2 md:min-h-[480px]">
            <Image src="/blog/skillvault-service-professional.webp" alt="Independent service professional at work" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-asili-dark/55 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-asili-green">Professional identity & opportunity</p>
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">MVP definition and validation</span><span className="text-xs font-semibold uppercase tracking-wider text-gray-400">02 / SKILLVAULT</span></div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">SkillVault</h2>
            <p className="mt-5 leading-8 text-gray-600">SkillVault is being designed as a services marketplace and digital professional identity platform. It will help customers discover and engage service professionals while helping workers build a credible record of skills, portfolio evidence, completed engagements and customer feedback.</p>
            <p className="mt-4 leading-8 text-gray-600">The first pilot is focused on personal services—hair, beauty and grooming professionals—in a limited Johannesburg area. The planned core journey is professional profile → customer request → application → selection and agreement → communication → completion → eligible feedback.</p>
            <p className="mt-4 leading-8 text-gray-600">The initial product is planned as a mobile-friendly web application. Verification will be transparent and evidence-based. AI assistance, payments and advanced matching will be considered only when they are useful, safe and feasible.</p>
            <div className="mt-7 flex items-center gap-3 text-sm text-asili-green"><UsersRound size={19} /><span className="font-semibold">Skills, reputation and trusted work</span></div>
            <a href={`mailto:${site.email}?subject=SkillVault%20pilot%20interest`} className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border-2 border-asili-green px-6 py-3 font-bold text-asili-green transition hover:bg-asili-green hover:text-white">Express interest in the pilot <ArrowRight size={17} /></a>
          </div>
        </article>
      </section>

      <section className="bg-asili-cream">
        <div className="section-container grid max-w-7xl gap-8 py-14 md:grid-cols-3 md:py-16">
          <div className="flex items-start gap-4"><ShieldCheck className="mt-1 shrink-0 text-asili-green" size={24} /><div><h3 className="text-lg font-bold">Trust by design</h3><p className="mt-2 text-sm leading-6 text-gray-600">Privacy, clear verification and safeguards are part of product thinking from the beginning.</p></div></div>
          <div className="flex items-start gap-4"><Wallet className="mt-1 shrink-0 text-asili-green" size={24} /><div><h3 className="text-lg font-bold">Built for real constraints</h3><p className="mt-2 text-sm leading-6 text-gray-600">We consider affordability, access, irregular income and mobile-first use.</p></div></div>
          <div className="flex items-start gap-4"><UsersRound className="mt-1 shrink-0 text-asili-green" size={24} /><div><h3 className="text-lg font-bold">Designed with people</h3><p className="mt-2 text-sm leading-6 text-gray-600">Product direction must be tested with the people whose problems we aim to solve.</p></div></div>
        </div>
      </section>

      <section className="section-container max-w-7xl py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 p-8 text-center md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-asili-green">A note on product status</p>
          <h2 className="mt-4 text-2xl font-bold md:text-3xl">Ambition, clearly separated from availability.</h2>
          <p className="mt-4 leading-7 text-gray-600">These descriptions communicate product direction, not a claim that every feature is already available. We will update this page as prototypes, pilots and validated capabilities become real.</p>
          <Link href="/progress" className="mt-7 inline-flex items-center gap-2 font-bold text-asili-green hover:text-asili-dark">Follow our progress <ArrowRight size={17} /></Link>
        </div>
      </section>
    </div>
  )
}
