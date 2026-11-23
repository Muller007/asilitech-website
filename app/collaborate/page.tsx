import { site } from '@/lib/site'

export const metadata = { title: 'Collaborate | Asili Tech' }

const groups = [
  {
    title: 'Personal-service professionals',
    body: 'Are you a hairdresser, barber, nail technician, makeup artist or beauty professional in Johannesburg? We would value a conversation about how you find customers, show your work and build trust.',
    cta: 'Express interest in SkillVault',
    subject: 'SkillVault%20professional%20pilot',
  },
  {
    title: 'Potential customers',
    body: 'If you regularly book personal services, tell us how you discover providers, what makes you trust them and what would make booking easier.',
    cta: 'Share customer feedback',
    subject: 'SkillVault%20customer%20research',
  },
  {
    title: 'Researchers and advisors',
    body: 'We welcome thoughtful feedback on African technology, informal economies, financial inclusion, marketplace trust, responsible AI and product research.',
    cta: 'Share your expertise',
    subject: 'Research%20and%20advisory',
  },
  {
    title: 'Technical and ecosystem partners',
    body: 'We are open to conversations with people and organisations who can contribute relevant technical expertise, pilot access, mentorship or responsible funding.',
    cta: 'Discuss collaboration',
    subject: 'Partnership%20enquiry',
  },
]

export default function Collaborate() {
  return (
    <div>
      <section className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <h1 className="mb-4 text-white">Build with us</h1>
          <p className="text-lg text-gray-100">
            Asili Tech is building deliberately. The most useful support at this
            stage is honest feedback, access to real problems, pilot participants
            and people who can challenge our assumptions.
          </p>
        </div>
      </section>
      <section className="section-container py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="card">
              <h2 className="mb-3 text-2xl">{g.title}</h2>
              <p className="mb-6 text-gray-700">{g.body}</p>
              <a href={`mailto:${site.email}?subject=${g.subject}`} className="font-semibold text-asili-green hover:text-asili-gold">
                {g.cta} →
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-asili-cream py-16">
        <div className="section-container max-w-3xl">
          <h2 className="mb-8">Common questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg">Is SkillVault open to the public?</h3>
              <p className="text-gray-700">Not yet. We are defining the MVP and validating the first personal-services pilot. Expressing interest does not guarantee access to a live product.</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg">Can I participate in research?</h3>
              <p className="text-gray-700">You can share product feedback. Any formal research use of personal information or participant data will require an appropriate consent process and safeguards.</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg">Are you seeking funding?</h3>
              <p className="text-gray-700">We are exploring suitable non-dilutive funding, technical credits and ecosystem partnerships. We are not presenting an open investment round.</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg">Where are you based?</h3>
              <p className="text-gray-700">Asili Tech is currently founder-led from Johannesburg, South Africa, with a longer-term focus on problems and opportunities across African markets.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
