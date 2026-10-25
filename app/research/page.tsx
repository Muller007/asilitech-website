export const metadata = { title: 'Research | Asili Tech' }

const phases = [
  { name: 'Phase 1: Descriptive analysis', months: 'Months 1–4', status: 'Starting now', detail: 'Map income sources, earnings and time use among early users. Interview workers about how they choose activities.' },
  { name: 'Phase 2: Causal analysis', months: 'Months 5–8', status: 'Planned', detail: 'Test how workers respond to changes in returns, costs and recommendations, using controlled comparisons.' },
  { name: 'Phase 3: Optimisation model', months: 'Months 9–14', status: 'Planned', detail: 'Build an allocation model for informal workers and compare it with what workers currently do.' },
  { name: 'Phase 4: Behaviour and networks', months: 'Months 15–18', status: 'Planned', detail: 'Examine how social ties, information gaps and constraints shape allocation.' },
  { name: 'Phase 5: Validation pilot', months: 'Months 19–24', status: 'Planned', detail: 'Test recommendations with a small group against a comparison group, then write up the thesis.' },
]

export default function Research() {
  return (
    <div>
      <section className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <h1 className="mb-4 text-white">Research</h1>
          <p className="text-lg text-gray-100">
            My MSc thesis at WorldQuant University, based on data collected through AMKA and SkillVault.
          </p>
        </div>
      </section>

      <section className="section-container max-w-3xl py-16">
        <h2 className="mb-4">Thesis</h2>
        <p className="mb-4 text-lg font-semibold">Portfolio optimisation for multi-income informal workers</p>
        <div className="prose-body">
          <p>
            The central question is how informal workers should allocate time and capital across several income-generating
            activities, and what kind of tools would help them do so. Standard portfolio theory assumes liquid markets and
            formal income. Informal work has transaction costs, irregular income, and social constraints that the standard
            framework does not capture. Adapting the framework to those conditions is the core of the thesis.
          </p>
          <p>
            The thesis is still being developed. The proposal is drafted and the methodology is planned, but no analysis has
            been completed yet.
          </p>
        </div>
      </section>

      <section className="bg-asili-cream py-16">
        <div className="section-container">
          <h2 className="mb-10">Phases and status</h2>
          <div className="space-y-4">
            {phases.map((p) => (
              <div key={p.name} className="card">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg">{p.name}</h3>
                  <span className="badge">{p.status}</span>
                </div>
                <p className="mb-2 text-sm font-semibold text-asili-gold">{p.months}</p>
                <p className="text-gray-700">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container max-w-3xl py-16">
        <h2 className="mb-4">Data and ethics</h2>
        <div className="prose-body">
          <p>
            Participants will be asked for consent before any of their data is used in research. Data will be anonymised before
            analysis, and personal details will not be published. A formal data protection and ethics plan is being written
            before data collection expands beyond the first users.
          </p>
          <p>
            No datasets are public yet. When they are, they will be described here with exactly what they contain.
          </p>
        </div>
        <p className="mt-8 text-gray-700"><strong>Publications:</strong> none yet.</p>
      </section>
    </div>
  )
}
