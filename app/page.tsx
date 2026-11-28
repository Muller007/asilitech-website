import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  ChartNoAxesCombined,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import { site } from '@/lib/site'
import { getPublishedContent } from '@/lib/content'

export default async function Home() {
  const updates = (await getPublishedContent()).slice(0, 3)

  return (
    <div className="overflow-hidden">
      <section className="relative isolate bg-asili-dark text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(212,160,63,0.22),transparent_34%),linear-gradient(135deg,#123d31_0%,#1a5542_52%,#102f28_100%)]" />
        <div className="section-container grid max-w-7xl items-center gap-12 py-16 md:grid-cols-[0.92fr_1.08fr] md:py-24">
          <div className="relative z-10">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-asili-gold backdrop-blur">
              <Sparkles size={14} /> African technology · Practical research
            </span>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
              Make more of your work <span className="text-asili-gold">count.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80 md:text-xl">
              We build thoughtful technology for the realities of work and money
              across Africa—helping people understand their finances, demonstrate
              their capabilities and connect with opportunity.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/products" className="group inline-flex items-center gap-3 rounded-full bg-asili-gold px-6 py-3.5 text-sm font-bold text-asili-dark shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-white">
                Explore our products <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                Discover Asili Tech
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/65">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-asili-gold" /> Trust by design</span>
              <span className="inline-flex items-center gap-2"><BookOpen size={16} className="text-asili-gold" /> Research-led</span>
              <span className="inline-flex items-center gap-2"><UsersRound size={16} className="text-asili-gold" /> People-centred</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-asili-gold/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl shadow-black/30">
              <Image
                src="/research/research-market.png"
                alt="A small-business owner using a phone to manage her market stall"
                width={1648}
                height={928}
                priority
                className="h-[330px] w-full rounded-[1.5rem] object-cover md:h-[480px]"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/25 bg-asili-dark/75 p-4 text-white shadow-xl backdrop-blur-md md:bottom-8 md:left-8 md:right-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-asili-gold">The opportunity</p>
                <p className="mt-1 text-lg font-semibold md:text-xl">Technology should reflect how people really live and work.</p>
              </div>
            </div>
            <div className="absolute -right-3 -top-5 hidden rounded-2xl border border-white/20 bg-white p-4 text-asili-dark shadow-xl sm:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-asili-green">Our focus</p>
              <p className="mt-1 text-sm font-bold">People. Progress. Possibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white">
        <div className="section-container grid max-w-7xl gap-8 py-8 sm:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="rounded-2xl bg-asili-cream p-3 text-asili-green"><ShieldCheck size={23} /></span>
            <div><h2 className="text-base font-bold">Trust comes first</h2><p className="mt-1 text-sm leading-6 text-gray-500">Privacy, safety and transparent product decisions.</p></div>
          </div>
          <div className="flex items-start gap-4">
            <span className="rounded-2xl bg-asili-cream p-3 text-asili-green"><ChartNoAxesCombined size={23} /></span>
            <div><h2 className="text-base font-bold">Evidence over hype</h2><p className="mt-1 text-sm leading-6 text-gray-500">Research and real-world validation shape what we build.</p></div>
          </div>
          <div className="flex items-start gap-4">
            <span className="rounded-2xl bg-asili-cream p-3 text-asili-green"><UsersRound size={23} /></span>
            <div><h2 className="text-base font-bold">Designed around people</h2><p className="mt-1 text-sm leading-6 text-gray-500">Technology that respects different ways of earning and working.</p></div>
          </div>
        </div>
      </section>

      <section className="section-container max-w-7xl py-20 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-asili-green">What we're building</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Two products. One people-first mission.</h2>
          <p className="mt-5 text-base leading-7 text-gray-600">Financial understanding and professional opportunity are connected parts of economic participation. Our products approach these challenges from different sides.</p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          <article className="group overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden bg-asili-cream">
              <Image src="/blog/amka-market-business.webp" alt="Small business owner managing her business" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-asili-green backdrop-blur">Financial intelligence</span>
            </div>
            <div className="p-7 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold">AMKA Finance</h3>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">Early initiative</span>
              </div>
              <p className="mt-4 leading-7 text-gray-600">A WhatsApp-first financial assistant designed to help people record income, understand cash flow across activities and make more informed money decisions.</p>
              <Link href="/products" className="mt-6 inline-flex items-center gap-2 font-bold text-asili-green transition group-hover:gap-3">Explore AMKA <ArrowRight size={17} /></Link>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden bg-asili-cream">
              <Image src="/blog/skillvault-service-professional.webp" alt="Independent service professional at work" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-asili-green backdrop-blur">Skills & opportunity</span>
            </div>
            <div className="p-7 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold">SkillVault</h3>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">MVP planning</span>
              </div>
              <p className="mt-4 leading-7 text-gray-600">A services marketplace and digital work identity platform designed to help professionals showcase skills, build a credible work history and connect with customers.</p>
              <Link href="/products" className="mt-6 inline-flex items-center gap-2 font-bold text-asili-green transition group-hover:gap-3">Explore SkillVault <ArrowRight size={17} /></Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-asili-cream">
        <div className="section-container grid max-w-7xl items-center gap-12 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-asili-green">Why this matters</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">The economy is bigger than a payslip.</h2>
            <p className="mt-5 leading-8 text-gray-600">Across Africa, people combine trading, services, casual work and independent activities to build their livelihoods. Too often, the systems around money and work fail to recognise the full picture.</p>
            <Link href="/research" className="mt-7 inline-flex items-center gap-2 font-bold text-asili-green hover:text-asili-dark">Explore our research <ArrowRight size={17} /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 shadow-sm"><span className="mb-5 inline-flex rounded-xl bg-asili-cream p-3 text-asili-green"><ChartNoAxesCombined size={22} /></span><h3 className="text-lg font-bold">Financial visibility</h3><p className="mt-2 text-sm leading-6 text-gray-600">Make irregular income and everyday financial decisions easier to understand.</p></div>
            <div className="rounded-3xl bg-white p-7 shadow-sm"><span className="mb-5 inline-flex rounded-xl bg-asili-cream p-3 text-asili-green"><UsersRound size={22} /></span><h3 className="text-lg font-bold">Recognised capability</h3><p className="mt-2 text-sm leading-6 text-gray-600">Help people show what they can do, not only where they have worked.</p></div>
            <div className="rounded-3xl bg-white p-7 shadow-sm"><span className="mb-5 inline-flex rounded-xl bg-asili-cream p-3 text-asili-green"><ShieldCheck size={22} /></span><h3 className="text-lg font-bold">Responsible trust</h3><p className="mt-2 text-sm leading-6 text-gray-600">Build confidence through clear safeguards and evidence-based decisions.</p></div>
            <div className="rounded-3xl bg-white p-7 shadow-sm"><span className="mb-5 inline-flex rounded-xl bg-asili-cream p-3 text-asili-green"><Sparkles size={22} /></span><h3 className="text-lg font-bold">Useful innovation</h3><p className="mt-2 text-sm leading-6 text-gray-600">Apply technology where it solves real problems and improves daily life.</p></div>
          </div>
        </div>
      </section>

      <section className="section-container max-w-7xl py-20 md:py-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-asili-green">Our approach</p><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Build carefully. Learn constantly.</h2><p className="mt-4 leading-7 text-gray-600">We work from first principles, test assumptions and share progress honestly.</p></div>
          <Link href="/progress" className="inline-flex items-center gap-2 font-bold text-asili-green hover:text-asili-dark">See our progress <ArrowRight size={17} /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 p-7"><span className="text-sm font-bold text-asili-gold">01 / UNDERSTAND</span><h3 className="mt-4 text-xl font-bold">Start with real problems</h3><p className="mt-3 text-sm leading-7 text-gray-600">Listen to people, understand constraints and learn how workarounds already happen.</p></div>
          <div className="rounded-3xl border border-gray-200 p-7"><span className="text-sm font-bold text-asili-gold">02 / BUILD</span><h3 className="mt-4 text-xl font-bold">Test what is useful</h3><p className="mt-3 text-sm leading-7 text-gray-600">Create focused tools, validate them with users and improve from evidence.</p></div>
          <div className="rounded-3xl border border-gray-200 p-7"><span className="text-sm font-bold text-asili-gold">03 / EARN TRUST</span><h3 className="mt-4 text-xl font-bold">Be accountable</h3><p className="mt-3 text-sm leading-7 text-gray-600">Protect information, communicate limitations and publish only supportable results.</p></div>
        </div>
      </section>

      {updates.length > 0 && (
        <section className="bg-gray-50">
          <div className="section-container max-w-7xl py-20">
            <div className="mb-9 flex items-end justify-between gap-4">
              <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-asili-green">From the Command Centre</p><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Latest updates</h2></div>
              <Link href="/updates" className="hidden items-center gap-2 font-bold text-asili-green sm:inline-flex">All updates <ArrowRight size={17} /></Link>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {updates.map((item) => (
                <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg" key={item.id}>
                  <p className="text-xs font-bold uppercase tracking-wider text-asili-green">{item.content_type.replace(/_/g, ' ')}</p>
                  <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                  {item.summary && <p className="mt-3 text-sm leading-6 text-gray-600">{item.summary}</p>}
                  <Link href={`/updates/${encodeURIComponent(item.slug)}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-asili-green">Read update <ArrowRight size={16} /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-asili-dark text-white">
        <div className="section-container flex max-w-7xl flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
          <div className="max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-asili-gold">A better future is built together</p><h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Have a problem worth solving with us?</h2><p className="mt-4 leading-7 text-white/70">We welcome conversations with workers, customers, researchers and partners who want to help shape useful technology.</p></div>
          <Link href="/collaborate" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-asili-gold px-7 py-4 font-bold text-asili-dark transition hover:bg-white">Collaborate with us <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  )
}
