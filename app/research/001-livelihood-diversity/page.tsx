import Link from "next/link";

export const metadata = {
  title: "Research Note 001: Livelihood Diversity | Asili Tech",
  description:
    "A literature analysis of rural livelihood diversification and its implications for research into informal work, AMKA and SkillVault.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-12">
    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
    <div className="prose-body mt-5 space-y-4 text-base leading-8 text-slate-700">{children}</div>
  </section>
);

export default function LivelihoodDiversityNote() {
  return (
    <main className="bg-white">
      <article className="mx-auto max-w-4xl px-6 py-14 md:px-10 md:py-20">
        <Link href="/research" className="text-sm font-semibold text-emerald-700 hover:underline">← Back to Research</Link>
        <header className="mt-8 border-b border-slate-200 pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Asili Tech Research · Literature Note 001</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">Rural Livelihood Diversity in Developing Countries</h1>
          <p className="mt-5 text-xl leading-8 text-slate-600">What livelihood diversification can teach us about informal work, financial decision-making and economic resilience.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-1">Frank Ellis · 1999</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">ODI Natural Resource Perspectives No. 40</span>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-800">Literature analysis · Not original empirical research</span>
          </div>
        </header>

        <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 text-sm leading-7 text-slate-700">
          <strong className="text-slate-950">Reading this note:</strong> Sections describing Ellis's argument are source-derived summaries. Sections labelled as Asili Tech interpretation or hypotheses are proposed product-research directions, not findings from the paper or validated product requirements.
        </div>

        <Section title="1. Purpose and source">
          <p>This note examines Ellis's account of livelihood diversification and asks what it can teach Asili Tech about the economic realities its products seek to serve. It does not claim that Asili Tech has validated the paper's propositions among South African users.</p>
          <p>Ellis's 1999 paper is a conceptual and policy-oriented synthesis drawing on a range of published and unpublished sources. It is not a single experiment or a systematic review under a modern protocol. Its primary focus is rural households. The framework may also illuminate urban survival strategies, but rural findings should not automatically be generalised to urban informal workers.</p>
          <ul className="list-disc space-y-2 pl-6">
            <li><a className="text-emerald-700 underline" href="https://odi.org/en/publications/rural-livelihood-diversity-in-developing-countries-evidence-and-policy-implications/" target="_blank" rel="noreferrer">Official ODI publication record</a></li>
            <li><a className="text-emerald-700 underline" href="https://media.odi.org/documents/2881.pdf" target="_blank" rel="noreferrer">Original paper PDF</a></li>
            <li><a className="text-emerald-700 underline" href="https://dlc.dlib.indiana.edu/dlc/items/f891d329-a3e0-4fc8-9f7e-e7f6ae32ed1d" target="_blank" rel="noreferrer">Digital Library of the Commons record</a></li>
          </ul>
        </Section>

        <Section title="2. What is livelihood diversification?">
          <p>Ellis describes a livelihood through the activities, assets and access that together determine the living gained by an individual or household. Livelihood diversification is the process through which households construct varied portfolios of activities and social-support capabilities for survival and improved living standards.</p>
          <p>A household can have a diverse livelihood portfolio even when individual members specialise in different occupations. Economic identity should not be reduced to one job, one income source or one stable occupation.</p>
        </Section>

        <Section title="3. Five asset categories">
          <ol className="list-decimal space-y-2 pl-6">
            <li><strong>Human capital:</strong> education, skills, health and capacity to work.</li>
            <li><strong>Physical capital:</strong> equipment, infrastructure and productive assets.</li>
            <li><strong>Social capital:</strong> networks, associations and relationships through which support or access may be obtained.</li>
            <li><strong>Financial capital and substitutes:</strong> savings, credit and assets that can store value or be exchanged.</li>
            <li><strong>Natural capital:</strong> the natural-resource base on which some livelihoods depend.</li>
          </ol>
          <p>Assets alone do not explain outcomes. Access to and use of assets are mediated by social relations, institutions, organisations, wider economic trends and shocks.</p>
        </Section>

        <Section title="4. Why households diversify">
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Risk spreading:</strong> activities may face different sources of uncertainty.</li>
            <li><strong>Seasonal allocation:</strong> labour may shift as opportunities and needs change through the year.</li>
            <li><strong>Consumption smoothing:</strong> income from one activity may help cover periods when another produces less.</li>
            <li><strong>Credit constraints:</strong> alternative activities or assets may help households manage limited formal finance.</li>
            <li><strong>Coping with shocks:</strong> alternative activities and social support may provide options when a livelihood source is disrupted.</li>
          </ul>
          <p>These mechanisms do not prove that diversification always improves welfare. Outcomes depend on available activities, resources, working conditions and the shocks people face.</p>
        </Section>

        <Section title="5. Unequal access and mixed outcomes">
          <p>Diversification is not automatically a route out of poverty. Better-resourced households may enter more remunerative activities, while poorer households may be pushed toward casual, part-time or low-return work. The same label—multiple income sources—can describe very different levels of choice and security.</p>
          <p>Ellis treats effects on productivity, the environment and gender relations as mixed and context-dependent. The paper does not justify universal claims that diversification necessarily raises productivity, improves environmental outcomes or empowers women.</p>
          <p>Counting income sources alone is inadequate. Research should also consider opportunity quality, returns, volatility, costs, time demands, control over resources and constraints on access.</p>
        </Section>

        <Section title="6. Policy implications in the paper">
          <ul className="list-disc space-y-2 pl-6">
            <li>Good governance and an enabling institutional environment.</li>
            <li>Human capital, education and skills.</li>
            <li>Infrastructure such as roads, power and communications.</li>
            <li>Appropriate access to credit.</li>
            <li>Women's assets, rights and participation.</li>
            <li>Safety nets and the conditions governing access to livelihood opportunities.</li>
          </ul>
          <p>These are policy themes from a 1999 paper. They should be checked against current South African evidence before being used as contemporary claims.</p>
        </Section>

        <Section title="7. What this may mean for AMKA">
          <p><strong>Asili Tech interpretation:</strong> If people earn through several activities, a tool that records only one business or one undifferentiated income total may obscure important differences. AMKA could investigate whether users need to record income, costs and time by activity, and whether they can understand seasonality, volatility, working-capital needs and cash-flow gaps.</p>
          <p>Potential capabilities to investigate include multiple activity records, revenue and cost tracking by activity, accessible cash-flow summaries, irregular-income handling and comparisons that do not assume the highest-revenue activity is necessarily the best.</p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7"><strong>Hypothesis AMKA-01:</strong> Structured, activity-aware financial records and understandable cash-flow summaries may help some micro-business owners better understand profitability, seasonality and resource requirements.</div>
          <p>This is not established. User demand, data reliability, decision changes and financial outcomes require research and testing.</p>
        </Section>

        <Section title="8. What this may mean for SkillVault">
          <p><strong>Asili Tech interpretation:</strong> A varied livelihood portfolio may include different services, short engagements and informal work histories. A conventional CV or single occupation label may not represent the breadth of a worker's capabilities and evidence.</p>
          <p>SkillVault could investigate profiles that present skills, service categories, work samples, completed engagements, verifiable references and customer feedback—with safeguards against abuse and unfair exclusion.</p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7"><strong>Hypothesis SKILLVAULT-01:</strong> Evidence-based professional profiles may reduce information gaps between workers and prospective customers where conventional qualifications or formal employment histories are limited.</div>
          <p>Customer trust, fairness of ratings, newcomer participation and effects on access to paid work remain untested questions.</p>
        </Section>

        <Section title="9. Shared research questions and data boundaries">
          <p>It may be useful to understand how financial activity and work histories relate. That does not mean AMKA and SkillVault should automatically combine personal financial and professional data.</p>
          <p>Any cross-product research or data use would need a clear purpose, meaningful consent where appropriate, data minimisation, access controls, retention limits, security safeguards and clear communication. Users should not have to surrender unrelated financial information to prove professional competence, or disclose work history to access a financial tool.</p>
        </Section>

        <Section title="10. Questions for further investigation">
          <ol className="list-decimal space-y-2 pl-6">
            <li>How many income-generating activities do target users combine, and how do these change over time?</li>
            <li>What do users mean by income: sales, gross receipts, net earnings, cash available or household contribution?</li>
            <li>How do time, transport, stock, equipment, care responsibilities and customer access shape activity choices?</li>
            <li>Which risks are shared across activities, and which are genuinely independent?</li>
            <li>What financial information do users already record, where and for whom?</li>
            <li>What evidence do customers use to assess informal service providers?</li>
            <li>Which verification and reputation mechanisms build trust without excluding capable newcomers?</li>
            <li>What current South African evidence should be reviewed before translating Ellis's 1999 discussion into product decisions?</li>
          </ol>
        </Section>

        <Section title="11. Suggested research sequence">
          <ol className="list-decimal space-y-2 pl-6">
            <li>Review recent South African and regional literature on informal livelihoods, micro-enterprises, financial management, work platforms and trust.</li>
            <li>Conduct appropriately approved exploratory interviews or participatory research with diverse workers and customers.</li>
            <li>Test whether activity-based records and evidence-based profiles reflect users' needs and language.</li>
            <li>Evaluate prototypes for comprehension, usability, data burden, trust, fairness and unintended consequences.</li>
            <li>Only with a suitable design and permissions, investigate whether product use changes relevant decisions or outcomes.</li>
          </ol>
          <p>No participant data, product analytics or causal effect is claimed in this note. Research involving people or their data must follow applicable institutional, legal and ethical requirements.</p>
        </Section>

        <Section title="12. Limitations and takeaway">
          <ul className="list-disc space-y-2 pl-6">
            <li>The source dates to 1999; historical statistics and institutional conditions are not current estimates.</li>
            <li>Its main focus is rural livelihoods, not specifically South African urban informal enterprises.</li>
            <li>It is not a causal evaluation of digital financial products or services marketplaces.</li>
            <li>The mechanisms described are analytical lenses, not universal explanations.</li>
            <li>Asili Tech's hypotheses are proposals for investigation, not validated requirements or proven impact claims.</li>
          </ul>
          <p className="text-lg font-medium text-slate-900">Understand the livelihood portfolio before designing the tool.</p>
          <p>A person's economic life may involve several activities, assets, relationships, constraints and risks. Asili Tech should avoid treating informal workers as a homogeneous category or assuming that more data, more income sources, more ratings or more optimisation automatically produces better outcomes.</p>
        </Section>

        <footer className="mt-14 border-t border-slate-200 pt-8 text-sm leading-7 text-slate-600">
          <strong className="text-slate-900">Reference</strong>
          <p>Ellis, F. (1999). <em>Rural Livelihood Diversity in Developing Countries: Evidence and Policy Implications.</em> Natural Resource Perspectives No. 40. London: Overseas Development Institute.</p>
          <p><a className="text-emerald-700 underline" href="https://odi.org/en/publications/rural-livelihood-diversity-in-developing-countries-evidence-and-policy-implications/" target="_blank" rel="noreferrer">ODI publication record</a> · <a className="text-emerald-700 underline" href="https://media.odi.org/documents/2881.pdf" target="_blank" rel="noreferrer">Original PDF</a></p>
          <p className="mt-4">Research note status: exploratory literature analysis. This is not an institutional research approval, completed empirical study or statement of established product impact.</p>
        </footer>
      </article>
    </main>
  );
}
