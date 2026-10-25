import { site } from '@/lib/site'

export const metadata = { title: 'Progress | Asili Tech' }

const done = [
  'AMKA code written',
  'AMKA tested with 3 users',
  'Asili Tech website built',
  'Thesis proposal drafted',
]

const inProgress = [
  'SkillVault development, targeting a beta in about 3 weeks',
  'Phase 1 data collection planning, starting with the first AMKA users',
  'Data protection and consent plan',
]

const next = [
  'Interview the 3 current AMKA users about their income sources',
  'Deploy AMKA publicly once hosting funds are available',
  'Begin SkillVault beta with a small group of service workers',
  'Publish the first Phase 1 summary, with findings reported honestly',
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
          <p className="text-lg text-gray-100">What is done, what is in progress, and what comes next. Updated monthly. Last updated: {site.lastUpdated}.</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <List title="Done" items={done} />
          <List title="In progress" items={inProgress} />
          <List title="Next" items={next} />
        </div>
        <p className="mt-10 max-w-2xl text-gray-600">
          This page will only show numbers once they can be checked. Users, transactions and findings will be added as they happen.
        </p>
      </section>
    </div>
  )
}
