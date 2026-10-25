import { site } from '@/lib/site'

export const metadata = { title: 'Products | Asili Tech' }

export default function Products() {
  return (
    <div>
      <section className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <h1 className="mb-4 text-white">Products</h1>
          <p className="text-lg text-gray-100">Two products, one research question. Here is what each one is and where it stands.</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="card mb-10">
          <span className="badge mb-4">Built, tested with 3 users, not launched</span>
          <h2 className="mb-4">AMKA Finance</h2>
          <p className="mb-6 text-gray-700">
            AMKA is a WhatsApp-based financial assistant for informal workers. People already run their business on WhatsApp,
            so AMKA works there rather than asking them to download another app.
          </p>
          <p className="mb-6 text-gray-700">
            Its purpose is to help workers keep track of what they earn across activities. It also produces the anonymised,
            consented data that the thesis research depends on.
          </p>
          {site.amkaWhatsAppUrl ? (
            <a href={site.amkaWhatsAppUrl} className="btn-primary">Join AMKA on WhatsApp</a>
          ) : (
            <a href={`mailto:${site.email}?subject=AMKA%20pilot`} className="btn-primary">Ask to join the AMKA pilot</a>
          )}
        </div>

        <div className="card">
          <span className="badge mb-4">In development, beta targeted in about 3 weeks</span>
          <h2 className="mb-4">SkillVault</h2>
          <p className="mb-6 text-gray-700">
            SkillVault is a gig platform for service workers, such as cleaners, plumbers and hairdressers, to find clients and
            track their earnings. It is not ready for public use yet.
          </p>
          <p className="mb-6 text-gray-700">
            It also records which gigs workers accept, decline and earn from. That gives the research a view of how opportunities
            are chosen.
          </p>
          {site.skillVaultUrl ? (
            <a href={site.skillVaultUrl} className="btn-secondary">Visit SkillVault</a>
          ) : (
            <a href={`mailto:${site.email}?subject=SkillVault%20beta`} className="btn-secondary">Ask to join the SkillVault beta</a>
          )}
        </div>
      </section>
    </div>
  )
}
