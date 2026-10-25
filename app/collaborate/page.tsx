import { site } from '@/lib/site'

export const metadata = { title: 'Collaborate | Asili Tech' }

const groups = [
  {
    title: 'Informal workers',
    body: 'If you earn from more than one activity and would like to try AMKA as part of the pilot, tell me. I will explain what data is collected, how it is anonymised, and that you can stop at any time.',
    cta: 'Ask to join the AMKA pilot',
    subject: 'AMKA%20pilot',
  },
  {
    title: 'Researchers',
    body: 'If you work on informal finance, development economics or portfolio theory, I would welcome your feedback on the thesis design and methodology.',
    cta: 'Send feedback on the research',
    subject: 'Research%20feedback',
  },
  {
    title: 'Advisors and mentors',
    body: 'Experienced people in fintech, financial inclusion or African research who are willing to review my work and challenge my assumptions.',
    cta: 'Offer advice',
    subject: 'Advisor%20enquiry',
  },
  {
    title: 'Press',
    body: 'If you are covering informal economies, financial inclusion or African AI, I am happy to talk about the work, including what is not finished.',
    cta: 'Contact for press',
    subject: 'Press%20enquiry',
  },
]

export default function Collaborate() {
  return (
    <div>
      <section className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <h1 className="mb-4 text-white">Work with us</h1>
          <p className="text-lg text-gray-100">Asili Tech is early. The most useful help right now is honest feedback, first users, and good questions.</p>
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
              <h3 className="mb-2 text-lg">Do you have funding?</h3>
              <p className="text-gray-700">Asili Tech is currently self-funded. I am open to conversations with partners, but no investment round is open.</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg">Can I use your data?</h3>
              <p className="text-gray-700">No datasets are public yet. Any sharing will follow consent, anonymisation and an ethics review, and will be described on the research page.</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg">Is AMKA available to everyone?</h3>
              <p className="text-gray-700">Not yet. It is in a small pilot. Write in and I will add you to the list as capacity allows.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
