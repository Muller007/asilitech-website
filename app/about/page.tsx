export const metadata = { title: 'About | Asili Tech' }

export default function About() {
  return (
    <div>
      <section className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <h1 className="mb-4 text-white">Kwanele Mlalazi</h1>
          <p className="text-lg text-gray-100">Founder of Asili Tech. AI and machine learning engineer, based in Johannesburg, originally from Zimbabwe.</p>
        </div>
      </section>

      <section className="section-container max-w-3xl py-16">
        <h2 className="mb-6">My story</h2>
        <div className="prose-body">
          <p>
            I started out as a self-taught developer and built my way into machine learning. Today I work as an AI and machine
            learning engineer. I hold a BSc in Computer Science from the University of the People, and I am now studying for an
            MSc in Financial Engineering at WorldQuant University, which I started in July 2026.
          </p>
          <p>
            My technical interests are in African-language NLP. Over time I kept coming back to a harder question: who do these
            technologies serve? Most financial products assume a steady salary and a bank account. The people I grew up around
            mostly don’t have either.
          </p>
          <p>
            That led me to found Ubuntu AI, the parent company of Asili Tech. Under it sit AMKA Finance and SkillVault, and the
            research thesis that connects them.
          </p>
        </div>

        <h2 className="mb-6 mt-12">Vision</h2>
        <div className="prose-body">
          <p>
            A world where informal workers can see their own income clearly, make allocation decisions with real information,
            and be recognised by the financial system on the basis of the work they actually do.
          </p>
        </div>

        <h2 className="mb-6 mt-12">What I am aiming for</h2>
        <div className="prose-body">
          <p>
            I want to build tools that informal workers actually use, and publish research that explains their decisions honestly.
            That means a working AMKA with real users, a SkillVault beta, a first analysis of how workers earn across activities,
            and eventually a validated pilot that tests whether better information changes outcomes.
          </p>
          <p>
            I am starting small on purpose. Three users are three real people who trusted something I built. I would rather grow
            from there than announce numbers I cannot back up.
          </p>
        </div>

        <h2 className="mb-6 mt-12">How research and product connect</h2>
        <div className="prose-body">
          <p>
            Research without products is guessing about people. Products without research are guessing about what works. Every
            AMKA and SkillVault feature is designed to answer a research question, and every finding is meant to feed back into
            the product.
          </p>
        </div>
      </section>
    </div>
  )
}
