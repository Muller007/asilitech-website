import Image from "next/image";

export const metadata = {
  title: "Research | Asili Tech",
  description:
    "The research direction exploring income allocation, financial decision-making and the realities of multi-income informal work.",
};

const phases = [
  {
    number: "01",
    title: "Descriptive analysis",
    period: "Indicative months 1–4",
    status: "Planned",
    description:
      "Understand how people combine income-generating activities, what they earn, the time they commit and the costs they face.",
    output: "A grounded picture of multi-income work and its constraints.",
  },
  {
    number: "02",
    title: "Behaviour and decision-making",
    period: "Indicative months 5–8",
    status: "Planned",
    description:
      "Explore how workers make choices when returns, costs, available time and information change. The final design will depend on the approved research question and method.",
    output: "A clearer account of the factors shaping allocation decisions.",
  },
  {
    number: "03",
    title: "Allocation model",
    period: "Indicative months 9–14",
    status: "Planned",
    description:
      "Develop and assess a model for reasoning about how limited time and resources might be allocated across income-generating activities.",
    output: "A model with explicit assumptions, constraints and limitations.",
  },
  {
    number: "04",
    title: "Social and information constraints",
    period: "Indicative months 15–18",
    status: "Planned",
    description:
      "Consider how networks, access to information, uncertainty and practical constraints may influence the choices available to workers.",
    output: "An analysis of factors that a purely mathematical model may overlook.",
  },
  {
    number: "05",
    title: "Evaluation and write-up",
    period: "Indicative months 19–24",
    status: "Planned",
    description:
      "Evaluate the proposed approach using an appropriate, ethically approved method if the required permissions and data access are secured, then document findings and limitations.",
    output: "A transparent evaluation and research write-up, subject to approval and feasibility.",
  },
];

const principles = [
  {
    title: "Start with lived realities",
    description:
      "Model the decisions people actually face, including irregular income, limited time, changing costs and uncertainty.",
  },
  {
    title: "Make assumptions visible",
    description:
      "State what the model assumes, what it leaves out and where its recommendations may not apply.",
  },
  {
    title: "Evaluate responsibly",
    description:
      "Use suitable comparison and evaluation methods only where the research design, permissions and data support them.",
  },
];

export default function ResearchPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-14 md:grid-cols-[1.02fr_0.98fr] md:items-center md:px-10 md:pb-24 md:pt-20">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Research direction · WorldQuant University
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
            Understanding how people make a living across multiple income streams.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            This research direction explores the financial and practical
            decisions faced by informal workers who combine different
            income-generating activities—and how quantitative methods can help
            us understand those choices.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
              MSc research direction
            </span>
            <span className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600">
              In preparation
            </span>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-6 text-slate-500">
            The topic and plan described here are a proposed direction, not a
            statement of institutional approval, completed research or
            established findings.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm">
          <Image
            src="/research/research-market.png"
            alt="A small-business vendor reviewing records at her market stall"
            width={1648}
            height={928}
            priority
            className="h-full min-h-[320px] w-full object-cover md:min-h-[520px]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-6 pt-20">
            <p className="max-w-md text-sm leading-6 text-white/90">
              Better models begin by understanding the realities behind the
              numbers.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                The research question
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Portfolio optimisation for multi-income informal workers
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                Many people do not depend on one predictable salary. They may
                combine trading, services, casual work and other activities,
                each with different returns, costs, time requirements and
                levels of uncertainty.
              </p>
              <p>
                The proposed research asks how quantitative and optimisation
                methods could help describe these trade-offs and support more
                informed allocation decisions—without assuming that every
                worker has the same goals, constraints or opportunities.
              </p>
              <p className="rounded-2xl border border-emerald-100 bg-white p-5 text-sm leading-7 text-slate-600">
                <strong className="text-slate-900">Current position:</strong>{" "}
                The proposal and methodology are still being developed. No
                research analysis has been completed, and no research dataset
                has been collected or published through this project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Research pathway
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            From understanding the problem to evaluating a model.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            These stages are an indicative planning framework. Their sequence,
            timing and methods may change as the research question is refined
            and institutional requirements are established.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-3xl font-semibold tracking-tight text-emerald-700">
                  {phase.number}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {phase.status}
                </span>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                {phase.period}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">
                {phase.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {phase.description}
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Intended output
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {phase.output}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Methodological principles
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Quantitative rigour, grounded in context.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              The research should not treat a model as useful simply because it
              produces an optimal number. It must be clear about the people,
              constraints and assumptions represented by that number.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-white/15 bg-white/[0.04] p-6"
              >
                <span className="text-sm font-semibold text-emerald-300">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Data, privacy and ethics
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            Trust must come before data collection.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            AMKA and SkillVault are product initiatives. Information generated
            through ordinary product use is not automatically research data
            and will not be represented as such on this page.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Any future use of participant information for research would
            require an appropriate research design, informed consent, relevant
            institutional and ethical permissions, and clear data-governance
            safeguards before collection or analysis begins.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            The safeguards will address data minimisation, secure handling,
            access controls, retention, anonymisation or de-identification
            where appropriate, and participants’ rights. The final approach
            will follow applicable requirements rather than treating this
            website summary as an ethics approval.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-50 p-7 md:p-9">
          <h3 className="text-xl font-semibold text-slate-950">
            What is available now?
          </h3>
          <div className="mt-6 space-y-5">
            <div className="border-b border-slate-200 pb-5">
              <p className="font-semibold text-slate-900">Research dataset</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                No public research dataset is currently available.
              </p>
            </div>
            <div className="border-b border-slate-200 pb-5">
              <p className="font-semibold text-slate-900">Analysis and findings</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                No completed analysis or findings are being claimed.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Publications</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                No publications are available yet. Research outputs will be
                listed here if and when they are completed and suitable for
                public release.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-emerald-50/60">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
              An evolving research direction
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Useful research begins with better questions.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              As the proposal develops, this page will be updated with the
              confirmed research question, methodology, ethical safeguards,
              and any outputs that are ready to share.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
