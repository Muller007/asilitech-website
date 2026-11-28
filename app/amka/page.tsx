import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, AudioLines, BookOpen, BrainCircuit, CheckCircle2, MessageCircle, ShieldCheck, Wallet, LineChart, Users, Eye } from 'lucide-react'
import { site } from '@/lib/site'

export const metadata = {
  title: 'AMKA Finance | Wake Up Your Money',
  description: 'AMKA is an early-stage, WhatsApp-first financial intelligence initiative designed around the realities of informal and multi-income work in Africa.',
}

const capabilities = [
  { icon: Wallet, title: 'Capture the everyday', body: 'A simple way to record money coming in and going out across trading, services, casual work and other activities.' },
  { icon: LineChart, title: 'See the bigger picture', body: 'Bring scattered activity into a clearer view of cash flow, business costs and patterns over time.' },
  { icon: BrainCircuit, title: 'Understand before deciding', body: 'Turn records into practical explanations and useful questions—not confusing financial jargon or unsupported promises.' },
]

const principles = [
  { icon: ShieldCheck, title: 'Your information deserves care', body: 'Consent, privacy, security and clear explanations must be built into the product from the beginning.' },
  { icon: BookOpen, title: 'Education before selling', body: 'AMKA Invest is envisioned as an independent financial learning experience, not a marketplace pushing financial products.' },
  { icon: Eye, title: 'Commercial transparency', body: 'Any future fees, commissions or partnerships must be clearly disclosed. Education should remain useful and independent.' },
]

export default function AmkaPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate overflow-hidden bg-asili-dark text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(212,160,63,0.22),transparent_32%),linear-gradient(135deg,#102f28_0%,#1a5542_55%,#0c2923_100%)]" />
        <div className="section-container grid max-w-7xl items-center gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-asili-gold">An Asili Tech product initiative</p>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">Early product initiative · In development</span>
            <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.04] tracking-tight text-white md:text-7xl">Wake up your <span className="text-asili-gold">money.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">AMKA is being designed to help people who earn in different ways make sense of their money—one simple conversation at a time.</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/65">A WhatsApp-first financial intelligence concept for informal workers, independent earners and small businesses across Africa.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${site.email}?subject=AMKA%20research%20and%20pilot%20interest`} className="inline-flex items-center justify-center gap-2 rounded-full bg-asili-gold px-6 py-3 font-bold text-asili-dark transition hover:bg-white">Join the conversation <ArrowRight size={17} /></a>
              <Link href="/research" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3 font-bold text-white transition hover:bg-white/10">Explore our research</Link>
            </div>
            <p className="mt-5 text-xs leading-5 text-white/50">AMKA is not yet open as a public financial service. This page describes the product direction, not currently available features or financial advice.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-asili-gold/25" />
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/10 shadow-2xl md:min-h-[500px]">
              <Image src="/blog/amka-market-business.webp" alt="Small business owner managing her business with a phone" fill priority sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-asili-dark/85 via-asili-dark/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-asili-dark/75 p-5 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-asili-gold">The AMKA idea</p>
                <p className="mt-2 text-xl font-semibold text-white">Know what came in. Know what went out. Know what it means.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container max-w-7xl py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-asili-green">The reality</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-asili-dark md:text-4xl">When income comes from many places, the full picture gets lost.</h2></div>
          <p className="text-lg leading-8 text-gray-600">A market trader may sell today, take a weekend job tomorrow and earn from a service on the side. Money moves through cash, transfers, stock purchases, transport and household needs. Traditional tools can assume one salary, one account or one tidy business. Real life is rarely that simple.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Many income streams', 'Trading, services, piece jobs and side activities.'],
            ['Scattered records', 'Receipts, chats, memory, cash and bank notifications.'],
            ['Blurred boundaries', 'Business costs and household spending can overlap.'],
            ['Hard decisions', 'Without a clear picture, planning can become guesswork.'],
          ].map(([title, body], i) => <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6"><p className="text-sm font-extrabold tracking-[0.16em] text-asili-gold">0{i + 1}</p><h3 className="mt-4 text-lg font-bold text-asili-dark">{title}</h3><p className="mt-2 text-sm leading-7 text-gray-600">{body}</p></div>)}
        </div>
      </section>

      <section className="bg-asili-cream">
        <div className="section-container max-w-7xl py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-asili-green">The proposed experience</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-asili-dark md:text-4xl">From everyday entries to better understanding.</h2><p className="mt-4 leading-7 text-gray-600">The initial direction is conversational and mobile-first. The aim is to make useful financial records easier to keep, then help people understand what those records may be telling them.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, body }, i) => <article key={title} className="rounded-2xl border border-amber-100 bg-white p-7 shadow-sm"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-asili-green"><Icon size={23} /></div><p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-asili-gold">0{i + 1}</p><h3 className="mt-2 text-xl font-bold text-asili-dark">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-600">{body}</p></article>)}
          </div>
          <div className="mt-8 rounded-2xl border border-amber-100 bg-white p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-asili-green">Illustrative conversation</p><h3 className="mt-1 text-xl font-bold text-asili-dark">Simple enough to start with a message.</h3></div><span className="rounded-full bg-asili-cream px-3 py-1 text-xs font-bold text-amber-900">Concept example</span></div>
            <div className="mx-auto mt-6 max-w-xl space-y-3 rounded-2xl bg-[#f3f5f1] p-4 sm:p-6">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#d9f4d2] p-4 text-sm text-gray-800 shadow-sm"><p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">You · Example</p><p className="mt-1">Sold R650 today. Spent R180 on stock and R40 on transport.</p></div>
              <div className="max-w-[88%] rounded-2xl rounded-bl-sm bg-white p-4 text-sm text-gray-800 shadow-sm"><p className="text-[10px] font-bold uppercase tracking-wider text-asili-green">AMKA · Concept response</p><p className="mt-1">You recorded R650 income and R220 in costs. That leaves R430 before any other expenses. Would you like to add another cost?</p></div>
              <p className="px-2 text-center text-[11px] leading-5 text-gray-500">Illustrative dialogue only. It is not a live WhatsApp bot or a promise of current functionality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container max-w-7xl py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-asili-green">Accessible by design</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-asili-dark md:text-4xl">Financial understanding should meet people where they are.</h2><p className="mt-5 leading-8 text-gray-600">AMKA is being shaped around more than dashboards and numbers. The longer-term learning experience is intended to combine voice, visual explanations, plain language, interactive examples and practical conversations—so people can learn in the way that works for them.</p><div className="mt-7 grid grid-cols-2 gap-3">{[{icon:MessageCircle,label:'Conversation'},{icon:AudioLines,label:'Voice'},{icon:Eye,label:'Visual learning'},{icon:BookOpen,label:'Practical lessons'}].map(({icon:Icon,label})=><div key={label} className="flex items-center gap-3 rounded-xl bg-asili-cream p-4"><Icon className="text-asili-green" size={20}/><span className="text-sm font-semibold text-asili-dark">{label}</span></div>)}</div></div>
          <div className="rounded-[2rem] bg-asili-dark p-7 text-white md:p-9"><p className="text-xs font-bold uppercase tracking-[0.18em] text-asili-gold">AMKA Invest · Education first</p><h3 className="mt-4 text-2xl font-bold text-white">Understand money before choosing what to do with it.</h3><p className="mt-4 leading-7 text-white/70">AMKA Invest is envisioned as a financial education experience that helps people understand concepts, compare trade-offs and ask better questions. It is not intended to push investment products or replace independent financial advice.</p><div className="mt-7 flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-4"><CheckCircle2 className="mt-0.5 shrink-0 text-asili-gold" size={20}/><p className="text-sm leading-6 text-white/75">Learning should empower people to make informed choices—not pressure them into products.</p></div></div>
        </div>
      </section>

      <section className="bg-asili-cream">
        <div className="section-container max-w-7xl py-16 md:py-20">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-asili-green">Principles before features</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-asili-dark md:text-4xl">Help people. Never exploit the information they share.</h2><p className="mt-4 leading-7 text-gray-600">Financial data is deeply personal. Trust is not a marketing line; it is a condition for building something useful.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{principles.map(({icon:Icon,title,body})=><article key={title} className="rounded-2xl border border-amber-100 bg-white p-6"><Icon size={25} className="text-asili-green"/><h3 className="mt-4 text-lg font-bold text-asili-dark">{title}</h3><p className="mt-2 text-sm leading-7 text-gray-600">{body}</p></article>)}</div>
        </div>
      </section>

      <section className="section-container max-w-7xl py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-asili-green">Where we are starting</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-asili-dark md:text-4xl">Designed in South Africa. Built with an African perspective.</h2><p className="mt-5 leading-8 text-gray-600">The first learning and validation focus is South Africa, with the realities of informal and micro-business activity at the centre. The product direction includes a WhatsApp-first experience and a web-based view for people who need a broader picture. What is built next will depend on user research, feasibility, safety and evidence.</p><Link href="/progress" className="mt-7 inline-flex items-center gap-2 font-bold text-asili-green hover:text-asili-dark">Follow our progress <ArrowRight size={17}/></Link></div>
          <div className="rounded-[2rem] border border-gray-200 bg-white p-7 md:p-9"><p className="text-xs font-bold uppercase tracking-[0.16em] text-asili-green">Who we want to learn from</p><div className="mt-6 space-y-5"><div className="flex gap-4"><Users className="mt-1 shrink-0 text-asili-green" size={22}/><div><h3 className="font-bold text-asili-dark">Informal and independent earners</h3><p className="mt-1 text-sm leading-6 text-gray-600">People combining several income streams and managing irregular cash flow.</p></div></div><div className="flex gap-4"><Wallet className="mt-1 shrink-0 text-asili-green" size={22}/><div><h3 className="font-bold text-asili-dark">Micro and small businesses</h3><p className="mt-1 text-sm leading-6 text-gray-600">Owners who want a clearer view of daily activity, costs and business performance.</p></div></div><div className="flex gap-4"><BookOpen className="mt-1 shrink-0 text-asili-green" size={22}/><div><h3 className="font-bold text-asili-dark">Educators and ecosystem partners</h3><p className="mt-1 text-sm leading-6 text-gray-600">People who can help make financial learning accessible, independent and relevant.</p></div></div></div><a href={`mailto:${site.email}?subject=AMKA%20research%20and%20pilot%20interest`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-asili-green px-6 py-3 font-bold text-white transition hover:bg-asili-dark">Share your perspective <ArrowRight size={17}/></a></div>
        </div>
      </section>

      <section className="bg-asili-dark text-white"><div className="section-container max-w-5xl py-16 text-center md:py-20"><p className="text-xs font-bold uppercase tracking-[0.2em] text-asili-gold">A note on availability</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">A clear ambition. An honest stage of development.</h2><p className="mx-auto mt-5 max-w-3xl leading-8 text-white/70">AMKA is an early product initiative under development and validation. This page does not offer account registration, live financial tracking, credit scoring, lending, investment products or guaranteed financial outcomes. Any future capabilities will be introduced only after appropriate testing, safeguards and clear communication.</p><a href={`mailto:${site.email}?subject=AMKA%20enquiry`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-asili-gold px-7 py-4 font-bold text-asili-dark transition hover:bg-white">Talk to us about AMKA <ArrowRight size={18}/></a></div></section>
    </div>
  )
}
