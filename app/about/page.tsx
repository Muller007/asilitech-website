export const metadata = { title: 'About | Asili Tech' }

export default function About() {
  return (
    <div>
      <section className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-asili-gold">About the venture</p>
          <h1 className="mb-4 text-white">Technology for people building their livelihoods.</h1>
          <p className="text-lg text-gray-100">
            Asili Tech is a founder-led technology venture based in Johannesburg,
            South Africa, building practical tools for financial understanding,
            professional identity and economic opportunity across Africa.
          </p>
        </div>
      </section>

      <section className="section-container max-w-3xl py-16">
        <h2 className="mb-6">Our story</h2>
        <div className="prose-body">
          <p>
            Asili Tech was founded by Kwanele Mlalazi, a computer science graduate
            originally from Zimbabwe and based in Johannesburg. His path into
            technology began through self-directed learning and grew into a deeper
            interest in machine learning, data and the ways technology can address
            practical problems.
          </p>
          <p>
            He holds a BSc in Computer Science from the University of the People and
            is pursuing an MSc in Financial Engineering at WorldQuant University.
            His technical interests include applied AI, financial engineering,
            African-language technology and data-driven tools for underserved
            markets.
          </p>
          <p>
            The questions behind Asili Tech are grounded in lived experience:
            how do people who work outside conventional employment systems keep
            track of their money, demonstrate their capabilities and access
            opportunities without being excluded by systems that do not reflect
            how they earn and work?
          </p>
        </div>

        <h2 className="mb-6 mt-12">What Asili Tech is building</h2>
        <div className="prose-body">
          <p>
            Asili Tech brings together two complementary product directions.
            AMKA Finance focuses on financial intelligence: helping people record
            and understand irregular or multiple income streams. SkillVault focuses
            on professional identity and opportunity: helping service professionals
            present their skills, connect with customers and build evidence of
            their work over time.
          </p>
          <p>
            They are distinct products, not one combined application. Their shared
            purpose is to make more of people's economic lives visible, understood
            and recognised.
          </p>
        </div>

        <h2 className="mb-6 mt-12">Our vision</h2>
        <div className="prose-body">
          <p>
            An economy in which people can turn their capabilities and work into
            credible opportunities, make informed decisions about their money and
            participate with greater confidence—regardless of whether their work
            follows a traditional employment path.
          </p>
        </div>

        <h2 className="mb-6 mt-12">How we work</h2>
        <div className="prose-body">
          <p>
            We start with first principles: understand the problem, speak to the
            people affected, test assumptions and build only what evidence justifies.
            We favour focused pilots over inflated launch claims, transparent
            product status over hype, and privacy and safety by design.
          </p>
          <p>
            Research and product development should inform one another, but we will
            not treat product activity as research evidence without appropriate
            consent, methodology and safeguards.
          </p>
        </div>

        <h2 className="mb-6 mt-12">Where we are now</h2>
        <div className="prose-body">
          <p>
            AMKA is an early product initiative. SkillVault is in product definition
            and MVP planning, with an initial pilot focused on personal services
            such as hair, beauty and grooming in a limited Johannesburg market.
            Neither product should be understood as a fully launched, generally
            available service.
          </p>
          <p>
            We are building deliberately: define the product, validate demand,
            develop a focused prototype, run a controlled pilot and expand only
            when the evidence supports it.
          </p>
        </div>
      </section>
    </div>
  )
}
