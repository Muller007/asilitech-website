import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Briefcase, HeartHandshake, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { site } from '@/lib/site'

export const metadata = {
  title: 'SkillVault | A professional identity built around real work',
  description: 'Discover the SkillVault vision: a services marketplace and independent professional record designed around skills, evidence of work and trusted customer relationships.',
}

const principles = [
  {
    icon: ShieldCheck,
    title: 'Trust is earned with evidence',
    body: 'Profiles, work examples and feedback should help people make more informed choices. Verification must be clear about what has—and has not—been checked.',
  },
  {
    icon: Briefcase,
    title: 'A record that travels with the person',
    body: 'The Professional Passport is being designed as an independent professional record, not simply a profile that belongs to one marketplace.',
  },
  {
    icon: HeartHandshake,
    title: 'Customers and professionals both matter',
    body: 'A useful service relationship needs clear expectations, respectful communication and a fair way for both sides to build confidence.',
  },
]

export default function SkillVaultPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-asili-dark text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_15%,rgba(212,160,63,0.22),transparent_32%),radial-gradient(circle_at_90%_85%,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="section-container grid max-w-7xl items-center gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-asili-gold">An Asili Tech product initiative</p>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">MVP definition and validation</span>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">Let your work speak for your skills.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">SkillVault is being designed to help independent service professionals show what they can do, build a credible record of their work and connect with customers—without reducing their experience to a CV.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${site.email}?subject=SkillVault%20professional%20pilot`} className="inline-flex items-center justify-center gap-2 rounded-full bg-asili-gold px-6 py-3 font-bold text-asili-dark transition hover:bg-white">I am a service professional <ArrowRight size={17} /></a>
              <a href={`mailto:${site.email}?subject=SkillVault%20customer%20research`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3 font-bold text-white transition hover:bg-white/10">I am a potential customer</a>
            </div>
            <p className="mt-5 text-xs leading-5 text-white/55">The product is not yet open to the public. These links start an email conversation; they do not register an account or guarantee pilot participation.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-asili-gold/25" />
            <div className="relative min-h-[340px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/10 shadow-2xl md:min-h-[470px]">
              <Image src="/blog/skillvault-service-professional.webp" alt="Independent service professional focused on their craft" fill priority sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-asili-dark/80 via-asili-dark/5 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-asili-dark/75 p-5 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-asili-gold">The idea</p>
                <p className="mt-2 text-xl font-semibold text-white">Skills. Evidence. Opportunity.</p>
                <p className="mt-1 text-sm text-white/70">A richer professional story, built over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container max-w-7xl py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-asili-green">The challenge</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-asili-dark md:text-4xl">Good work is not always easy to discover—or prove.</h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">Many capable professionals build their livelihoods through skill, consistency and relationships. Yet their experience can be scattered across word-of-mouth referrals, chats, photos and repeat customers. Customers, in turn, may struggle to compare providers or know what evidence to trust.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-asili-green"><Sparkles size={21} /></div>
            <h3 className="mt-4 text-lg font-bold text-asili-dark">Skills can be invisible</h3>
            <p className="mt-2 text-sm leading-7 text-gray-600">A person's capability may be much stronger than the information available in a short profile or CV.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-asili-green"><Users size={21} /></div>
            <h3 className="mt-4 text-lg font-bold text-asili-dark">Trust is hard to assess</h3>
            <p className="mt-2 text-sm leading-7 text-gray-600">Customers need useful signals about experience, expectations and past work—not unsupported promises.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-asili-green"><Briefcase size={21} /></div>
            <h3 className="mt-4 text-lg font-bold text-asili-dark">Reputation is fragmented</h3>
            <p className="mt-2 text-sm leading-7 text-gray-600">A professional's track record can be spread across platforms and personal networks, making it difficult to carry forward.</p>
          </div>
        </div>
      </section>

      <section className="bg-asili-cream">
        <div className="section-container max-w-7xl py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-asili-green">How the concept works</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-asili-dark md:text-4xl">A professional journey—not just a job listing.</h2>
            <p className="mt-4 leading-7 text-gray-600">The proposed experience connects a professional's skills and work history with customer discovery and clear service agreements.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'Show your skills', 'Create a professional profile that explains services, experience and examples of work.'],
              ['02', 'Build your record', 'Accumulate relevant work evidence and eligible feedback over time.'],
              ['03', 'Connect with customers', 'Receive and respond to requests, with expectations discussed before work begins.'],
              ['04', 'Grow your reputation', 'Build a more useful professional story through fair, relevant and accountable records.'],
            ].map(([number, title, body]) => (
              <div key={number} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-extrabold tracking-[0.18em] text-asili-gold">{number}</p>
                <h3 className="mt-4 text-lg font-bold text-asili-dark">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs leading-5 text-gray-500">Illustrative product journey. These capabilities are planned and remain subject to research, design and validation.</p>
        </div>
      </section>

      <section className="section-container max-w-7xl py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-asili-green">The Professional Passport</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-asili-dark md:text-4xl">A professional record that can grow beyond one platform.</h2>
            <p className="mt-5 leading-8 text-gray-600">At the heart of SkillVault is the idea of a Professional Passport: a structured record of a person's skills, relevant evidence and work history. It is intended to remain independent, with professionals able to use and share relevant parts of their record in appropriate contexts.</p>
            <p className="mt-4 leading-8 text-gray-600">The aim is not to create a permanent score that defines a person. Records need context, consent, correction pathways and safeguards against unfair or misleading feedback.</p>
          </div>
          <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center justify-between border-b border-gray-100 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-asili-green">Concept preview</p>
                <h3 className="mt-1 text-xl font-bold text-asili-dark">Professional Passport</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-asili-green"><BadgeCheck size={25} /></div>
            </div>
            <div className="mt-6 space-y-4">
              {[
                ['Professional identity', 'A profile describing the person and their services'],
                ['Skills and experience', 'Capabilities, categories and relevant experience'],
                ['Portfolio evidence', 'Work examples that the professional chooses to share'],
                ['Engagement history', 'A contextual record of eligible completed work'],
                ['Feedback and corrections', 'Relevant feedback with fair review and dispute pathways'],
              ].map(([title, body]) => (
                <div key={title} className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-asili-gold" />
                  <div><p className="font-semibold text-asili-dark">{title}</p><p className="mt-1 text-sm leading-6 text-gray-600">{body}</p></div>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-xl bg-asili-cream p-4 text-xs leading-5 text-gray-600">Concept only. No live Passport, verification badge or reputation score is being offered at this stage.</p>
          </div>
        </div>
      </section>

      <section className="bg-asili-dark text-white">
        <div className="section-container max-w-7xl py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-asili-gold">Principles before features</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Trust has to be designed into the system.</h2>
            <p className="mt-4 leading-7 text-white/70">A marketplace can create opportunity only if it treats the people on both sides fairly. These principles will guide product decisions as the pilot is shaped.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <Icon className="text-asili-gold" size={25} />
                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container max-w-7xl py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-asili-green">First pilot focus</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-asili-dark md:text-4xl">Start with personal services in Johannesburg.</h2>
            <p className="mt-5 leading-8 text-gray-600">The first proposed pilot is intentionally focused on hair, beauty and grooming professionals in a limited Johannesburg area. A narrow starting point will help us understand real customer behaviour, professional needs, trust concerns and the practical work required to deliver a useful service.</p>
            <p className="mt-4 leading-8 text-gray-600">The initial product is planned as a mobile-friendly web application. The pilot scope and location will be refined through conversations and validation—not assumed in advance.</p>
          </div>
          <div className="rounded-[2rem] border border-gray-200 bg-asili-cream p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-asili-green">Who we want to hear from</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-gray-700">
              <li><strong>Professionals:</strong> hairdressers, barbers, nail technicians, makeup artists and beauty professionals.</li>
              <li><strong>Customers:</strong> people who book personal services and can share what makes them confident in a provider.</li>
              <li><strong>Community partners:</strong> people and organisations with insight into local service economies.</li>
            </ul>
            <a href={`mailto:${site.email}?subject=SkillVault%20pilot%20interest`} className="mt-7 inline-flex items-center gap-2 rounded-full bg-asili-green px-6 py-3 font-bold text-white transition hover:bg-asili-dark">Start a conversation <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="bg-asili-cream">
        <div className="section-container max-w-4xl py-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-asili-green">Questions we are working through</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-asili-dark">What SkillVault is—and is not—today.</h2>
          <div className="mt-8 divide-y divide-amber-200">
            <div className="py-5"><h3 className="font-bold text-asili-dark">Can I sign up now?</h3><p className="mt-2 text-sm leading-7 text-gray-600">Not yet. SkillVault is in MVP definition and validation. The email links on this page invite conversations; they do not create accounts or guarantee pilot access.</p></div>
            <div className="py-5"><h3 className="font-bold text-asili-dark">Will SkillVault guarantee customers or jobs?</h3><p className="mt-2 text-sm leading-7 text-gray-600">No. The goal is to improve discovery and make relevant professional information easier to understand. No platform can guarantee work or customer outcomes.</p></div>
            <div className="py-5"><h3 className="font-bold text-asili-dark">Will every professional need the same identity checks?</h3><p className="mt-2 text-sm leading-7 text-gray-600">The design direction is proportionate, feature-specific checks with clear explanations. Any checks must be justified by the feature and handled with appropriate safeguards.</p></div>
            <div className="py-5"><h3 className="font-bold text-asili-dark">How can I help shape the product?</h3><p className="mt-2 text-sm leading-7 text-gray-600">Share your experience as a professional or customer, or connect us with people who understand the local services economy.</p></div>
          </div>
        </div>
      </section>

      <section className="section-container max-w-7xl py-16">
        <div className="rounded-[2rem] bg-asili-dark px-7 py-12 text-center text-white md:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-asili-gold">Help shape the first pilot</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">The best starting point is listening to the people who do the work.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">If you are a service professional, a customer or a potential community partner in Johannesburg, we would value a conversation.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`mailto:${site.email}?subject=SkillVault%20professional%20pilot`} className="inline-flex items-center justify-center gap-2 rounded-full bg-asili-gold px-6 py-3 font-bold text-asili-dark hover:bg-white">Express professional interest <ArrowRight size={17} /></a>
            <Link href="/collaborate" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10">Explore collaboration</Link>
          </div>
          <p className="mt-6 text-xs text-white/45">SkillVault is a product concept under development. No live service is being offered yet.</p>
        </div>
      </section>
    </div>
  )
}
