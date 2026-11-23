import { site } from '@/lib/site'

export const metadata = { title: 'Progress | Asili Tech' }

const done = [
  'Asili Tech website and public product information established',
  'AMKA product concept and initial implementation work',
  'SkillVault business direction and two-sided marketplace concept defined',
  'SkillVault initial personal-services pilot segment selected',
  'Initial SkillVault requirements and system-design foundations documented',
]

const inProgress = [
  'AMKA product refinement and validation',
  'SkillVault MVP requirements, user journeys and data model',
  'SkillVault pilot discovery with personal-service professionals and customers',
  'Funding and technical-support programme research',
]

const next = [
  'Interview personal-service professionals and prospective customers',
  'Validate the first pilot area and the most frequent customer needs',
  'Build the SkillVault professional identity foundation',
  'Test the request, application and booking workflow',
  'Publish progress only when results can be substantiated',
]

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card">
      <h3 className="mb-4 text-lg">{title}</h3>
      <ul className="space-y-3 text-gray-700">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-asili-gold">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Progress() {
  return (
    <div>
      <section className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <h1 className="mb-4 text-white">Progress</h1>
          <p className="text-lg text-gray-100">
            A transparent view of what has been established, what is being worked
            on and what comes next. Last reviewed: {site.lastUpdated}.
          </p>
        </div>
      </section>
      <section className="section-container py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <List title="Established" items={done} />
          <List title="In progress" items={inProgress} />
          <List title="Next" items={next} />
        </div>
        <p className="mt-10 max-w-2xl text-gray-600">
          We do not publish user, transaction, revenue or impact numbers until
          they can be checked and responsibly reported. Planned work is not
          presented as completed work.
        </p>
      </section>
    </div>
  )
}
