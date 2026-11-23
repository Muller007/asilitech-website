import { site } from '@/lib/site'

export const metadata = { title: 'Products | Asili Tech' }

export default function Products() {
  return (
    <div>
      <section className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-asili-gold">Our products</p>
          <h1 className="mb-4 text-white">Two different problems. A shared commitment to economic participation.</h1>
          <p className="text-lg text-gray-100">
            We are developing focused tools for people whose work and financial
            lives are not always well served by traditional systems.
          </p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="card mb-8">
          <span className="badge mb-4">Early product initiative</span>
          <h2 className="mb-4">AMKA Finance</h2>
          <p className="mb-4 text-gray-700">
            AMKA is a WhatsApp-first financial assistant for people in the informal
            economy. The product direction is to make it easier to record income
            and expenses, understand cash flow across activities and make decisions
            using a clearer picture of their finances.
          </p>
          <p className="mb-6 text-gray-700">
            The longer-term ambition is to turn consented, appropriately protected
            financial records into useful insights. Any financial or credit-related
            use must be developed with suitable safeguards and partners; AMKA does
            not promise access to loans or improved credit outcomes.
          </p>
          <a href={`mailto:${site.email}?subject=AMKA%20enquiry`} className="btn-primary">
            Enquire about AMKA
          </a>
        </div>

        <div className="card">
          <span className="badge mb-4">MVP definition and validation</span>
          <h2 className="mb-4">SkillVault</h2>
          <p className="mb-4 text-gray-700">
            SkillVault is being designed as a services marketplace and digital
            professional identity platform. It will help customers discover and
            engage service professionals while helping workers build a credible
            record of skills, portfolio evidence, completed engagements and
            customer feedback.
          </p>
          <p className="mb-4 text-gray-700">
            The first pilot is focused on personal services—hair, beauty and
            grooming professionals—in a limited Johannesburg area. The planned
            core journey is professional profile → customer request → application
            → selection and agreement → communication → completion → eligible
            feedback.
          </p>
          <p className="mb-6 text-gray-700">
            The initial product is planned as a mobile-friendly web application.
            Verification will be transparent and evidence-based. AI assistance,
            payments and advanced matching will be considered only when they are
            useful, safe and feasible.
          </p>
          <a href={`mailto:${site.email}?subject=SkillVault%20pilot%20interest`} className="btn-secondary">
            Express interest in the SkillVault pilot
          </a>
        </div>
      </section>

      <section className="bg-asili-cream py-16">
        <div className="section-container max-w-3xl">
          <h2 className="mb-6">A note on product status</h2>
          <p className="prose-body">
            These descriptions communicate product direction, not a claim that
            every feature is already available. We will update this page as
            prototypes, pilots and validated capabilities become real.
          </p>
        </div>
      </section>
    </div>
  )
}
