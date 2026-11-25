import Link from "next/link";

export const metadata = {
  title: "Research Note 002: Household Livelihood Diversification | Asili Tech",
  description:
    "An empirical literature analysis of livelihood diversification among 1,773 rural households in eight sub-Saharan African countries.",
};

const Metric = ({ value, label, detail }: { value: string; label: string; detail: string }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5">
    <p className="text-3xl font-semibold tracking-tight text-emerald-700">{value}</p>
    <p className="mt-2 font-semibold text-slate-900">{label}</p>
    <p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-12">
    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
    <div className="prose-body mt-5 space-y-4 text-base leading-8 text-slate-700">{children}</div>
  </section>
);

function Bar({ label, value, note }: { label: string; value: number; note: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-4 text-sm">
        <span className="font-medium text-slate-800">{label}</span>
        <span className="font-semibold tabular-nums text-slate-950">{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-emerald-600" style={{ width: value + "%" }} />
      </div>
      <p className="text-xs leading-5 text-slate-500">{note}</p>
    </div>
  );
}

export default function LivelihoodDiversityNote002() {
  return (
    <main className="bg-white">
      <article className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-20">
        <Link href="/research" className="text-sm font-semibold text-emerald-700 hover:underline">← Back to Research</Link>
        <header className="mt-8 border-b border-slate-200 pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Asili Tech Research · Literature Note 002</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">Household Livelihood Diversification in Rural Africa</h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-600">What an eight-country household study reveals about diverse and changing livelihood portfolios—and what its measures leave unanswered.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-1">Musumba et al. · 2022</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Agricultural Economics · 53(2)</span>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-800">Empirical literature analysis</span>
          </div>
        </header>

        <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 text-sm leading-7 text-slate-700">
          <strong className="text-slate-950">Scope note:</strong> This is a study of 1,773 rural households in eight selected Millennium Villages, using 2009 and 2011 survey waves. It is not a representative survey of all African households or South African urban informal workers. Findings below are reported by the authors; product implications are Asili Tech hypotheses.
        </div>

        <section className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Metric value="1,773" label="Households" detail="Observed in both survey waves" />
            <Metric value="8" label="Countries" detail="Sub-Saharan African study villages" />
            <Metric value="3,546" label="Household-year records" detail="Two observations per household" />
            <Metric value="2009–2011" label="Study window" detail="Two survey waves" />
          </div>
        </section>

        <Section title="1. What did the researchers study?">
          <p>Musumba, Palm, Komarek, Mutuo and Kaya examined livelihood diversification among rural agricultural households. The study used three broad activity categories: crop production, livestock activities and non-farm activities. The latter included temporary non-farm employment, business enterprises and salaried employment.</p>
          <p>The eight study villages were in Ghana, Nigeria, Senegal, Mali, Rwanda, Tanzania, Malawi and Uganda. The survey modules covered livelihood strategies, income sources, household and farm assets, credit, transfers, consumption and shocks.</p>
          <p><a className="text-emerald-700 underline" href="https://onlinelibrary.wiley.com/doi/full/10.1111/agec.12694" target="_blank" rel="noreferrer">Read the full open-access article</a> · <a className="text-emerald-700 underline" href="https://cgspace.cgiar.org/items/7fb2cb8a-aad0-4b82-b82d-b8a56bd854a7" target="_blank" rel="noreferrer">CGIAR record and PDF</a></p>
        </Section>

        <Section title="2. The conceptual framework">
          <p>The authors use the Sustainable Rural Livelihoods framework to organise the resources households draw upon and the vulnerability context in which they make livelihood choices.</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Human", "Education and labour"],
              ["Natural", "Land and water"],
              ["Financial", "Savings and credit"],
              ["Physical", "Roads and infrastructure"],
              ["Social", "Safety nets and organisations"],
            ].map(([name, detail]) => (
              <div key={name} className="rounded-xl bg-slate-50 p-4">
                <p className="font-semibold text-emerald-800">{name}</p>
                <p className="mt-2 text-xs leading-5 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
          <p>Seasonality and shocks—including weather and output-price variability—also shape the context in which assets are used.</p>
        </Section>

        <Section title="3. What did the study find?">
          <div className="grid gap-4 sm:grid-cols-3">
            <Metric value="40%" label="All three activities" detail="Crop, livestock and non-farm" />
            <Metric value="50%" label="Non-farm participation" detail="Households reporting non-farm activities" />
            <Metric value="19%" label="Transient livelihoods" detail="Moved between one and multiple activities across waves" />
          </div>
          <div className="mt-8 rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-950">Three findings worth remembering</h3>
            <div className="mt-6 space-y-6">
              <Bar label="Households undertaking all three activity categories" value={40} note="Reported by the authors for the study sample." />
              <Bar label="Households reporting non-farm activities" value={50} note="Non-farm participation varied by village and activity type." />
              <Bar label="Households with a transient livelihood classification" value={19} note="Changed between one activity and multiple activities between 2009 and 2011." />
            </div>
            <p className="mt-5 text-xs leading-5 text-slate-500">Bars represent separate reported sample proportions. They are not parts of a single 100% composition and should not be added together.</p>
          </div>
          <p>The authors also report a 7% increase in the share of households reporting non-farm activities between survey waves. This is the paper's reported percentage change; it is not restated here as a seven-percentage-point change.</p>
        </Section>

        <Section title="4. Livelihood portfolios changed across places">
          <p>Nineteen percent of households were classified as transient overall, but village-level rates differed substantially.</p>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-950">Transient livelihood share by village</h3>
            <p className="mt-1 text-xs text-slate-500">Percent of households in each village classified as transient by the study.</p>
            <div className="mt-6 space-y-5">
              {[
                ["Bonsaaso, Ghana", 43],
                ["Mayange, Rwanda", 35],
                ["Mbola, Tanzania", 31],
                ["Mwandama, Malawi", 19],
                ["Pampaida, Nigeria", 15],
                ["Ruhiira, Uganda", 9],
                ["Tiby, Mali", 6],
                ["Potou, Senegal", 4],
              ].map(([name, value]) => (
                <Bar key={name} label={String(name)} value={Number(value)} note="" />
              ))}
            </div>
          </div>
          <p>This variation cautions against treating a regional average as a description of every local economy. The authors describe the most common combinations as all three activities, crop and livestock, crop only, and crop and non-farm.</p>
        </Section>

        <Section title="5. What was associated with diversification?">
          <p>The authors report that cultivated land area and access to credit were important factors associated with livelihood diversity. Their conclusion highlights a positive association between non-agricultural credit and livelihood diversity, and a negative association between drought and livelihood diversity. Cultivated crop-land area was positively associated with the number of livelihood activities.</p>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
            <strong>Interpretation caution:</strong> These are associations from a correlated random-effects model, not proof that giving credit will cause a household to diversify or that drought has an identical effect in every context.
          </div>
        </Section>

        <Section title="6. How did they measure diversification?">
          <p>The primary livelihood diversity index counted the number of broad activity categories in which a household participated:</p>
          <div className="rounded-2xl bg-slate-950 p-6 text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Livelihood diversity index</p>
            <p className="mt-4 text-2xl font-semibold">Crop + Livestock + Non-farm</p>
            <p className="mt-3 text-sm text-slate-300">Each category is an activity participation indicator; the count ranges from 1 to 3 in the analytic sample.</p>
          </div>
          <p>The paper also constructs a non-farm activity count and a crop index. Its count measure is useful for describing breadth, but it does not measure income shares, profitability, the balance between activities or portfolio risk.</p>
        </Section>

        <Section title="7. The measurement gap: same count, different financial structure">
          <p>Consider two hypothetical examples. They are not observations from the paper.</p>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-semibold text-slate-950">Illustrative household A</p>
              <div className="mt-5 flex h-5 overflow-hidden rounded-full bg-slate-100">
                <div className="bg-emerald-700" style={{ width: "90%" }} />
                <div className="bg-amber-400" style={{ width: "10%" }} />
              </div>
              <div className="mt-3 flex justify-between text-xs text-slate-500"><span>Activity A · 90%</span><span>Activity B · 10%</span></div>
              <p className="mt-4 text-sm text-slate-600">Two activities, but income is concentrated in one.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-semibold text-slate-950">Illustrative household B</p>
              <div className="mt-5 flex h-5 overflow-hidden rounded-full bg-slate-100">
                <div className="bg-emerald-700" style={{ width: "50%" }} />
                <div className="bg-amber-400" style={{ width: "50%" }} />
              </div>
              <div className="mt-3 flex justify-between text-xs text-slate-500"><span>Activity A · 50%</span><span>Activity B · 50%</span></div>
              <p className="mt-4 text-sm text-slate-600">Two activities, with a more balanced income split.</p>
            </div>
          </div>
          <p>Both households have a count of two activities. Yet the financial composition differs. The count index cannot distinguish this. Income shares, costs, net contributions, time, volatility and co-movement would be additional measures for future research—not measures reported in this paper.</p>
        </Section>

        <Section title="8. Methods and limitations">
          <p>The researchers combined exploratory descriptive statistics, a correlated random-effects model and transition probabilities. They report a 24% attrition rate across villages and use inverse probability weights to address potential attrition bias. They also state that the study was not designed as an impact evaluation of the Millennium Villages project.</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>A count index measures breadth, not income balance or profitability.</li>
            <li>Two survey waves offer a limited view of longer-term changes.</li>
            <li>The eight selected rural villages are not representative of every African context.</li>
            <li>Model associations do not establish causal effects.</li>
            <li>Rural agricultural findings should not be directly generalised to urban South African informal businesses.</li>
          </ul>
        </Section>

        <Section title="9. What this raises for AMKA and SkillVault">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">AMKA · Hypothesis 02</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-950">Understand the financial weight of each activity.</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">Activity-level records and measures of income concentration may help some users understand how income sources contribute to available cash and how exposed they are to changes in individual activities.</p>
          </div>
          <div className="mt-5 rounded-2xl border border-slate-200 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">SkillVault · Hypothesis 02</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-950">Represent changing work portfolios.</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">A flexible profile that records evidence across service categories may represent informal workers' changing work histories more accurately than a single occupation label.</p>
          </div>
          <p>Both are unvalidated hypotheses. User discovery, usability, fairness, data burden, privacy and outcome testing are required before product claims are made.</p>
        </Section>

        <Section title="10. Questions for further research">
          <ol className="list-decimal space-y-2 pl-6">
            <li>Does the number of income sources tell us enough about economic resilience?</li>
            <li>How should diversification be measured when activities have different units, costs and income patterns?</li>
            <li>Can income concentration and volatility distinguish balanced portfolios from those dominated by one activity?</li>
            <li>How do shocks affect the ability to maintain multiple income sources?</li>
            <li>How do workers distinguish opportunity-led diversification from diversification driven by necessity?</li>
            <li>What does diversification look like in South African urban informal businesses?</li>
            <li>What can people realistically record without excessive administrative burden?</li>
          </ol>
        </Section>

        <Section title="11. Research takeaway">
          <p className="text-lg font-medium text-slate-950">Counting activities tells us how many livelihood categories a household participates in; it does not tell us how financially important, profitable or risky those activities are.</p>
          <p>For Asili Tech, the next research step is to investigate the quality and structure of income portfolios, not just their size. AMKA may help users understand the financial composition of their activities, while SkillVault may need to represent the changing composition of their work. Both propositions remain hypotheses to test.</p>
        </Section>

        <footer className="mt-14 border-t border-slate-200 pt-8 text-sm leading-7 text-slate-600">
          <strong className="text-slate-900">Reference</strong>
          <p>Musumba, M., Palm, C. A., Komarek, A. M., Mutuo, P. K., & Kaya, B. (2022). Household livelihood diversification in rural Africa. <em>Agricultural Economics, 53</em>(2), 246–256. https://doi.org/10.1111/agec.12694</p>
          <p><a className="text-emerald-700 underline" href="https://onlinelibrary.wiley.com/doi/full/10.1111/agec.12694" target="_blank" rel="noreferrer">Publisher full text</a> · <a className="text-emerald-700 underline" href="https://onlinelibrary.wiley.com/doi/pdfdirect/10.1111/agec.12694" target="_blank" rel="noreferrer">Publisher PDF</a> · <a className="text-emerald-700 underline" href="https://cgspace.cgiar.org/items/7fb2cb8a-aad0-4b82-b82d-b8a56bd854a7" target="_blank" rel="noreferrer">CGIAR repository</a></p>
          <p className="mt-4">Research note status: analysis of published literature. This is not original empirical research by Asili Tech or a claim of validated product impact.</p>
        </footer>
      </article>
    </main>
  );
}
