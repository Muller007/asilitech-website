import Link from 'next/link'
import { site } from '@/lib/site'

export const metadata = {
  title: 'Skills need proof, not just promotion | Asili Tech',
  description: 'Why service professionals need trusted ways to demonstrate skills, work history and reputation—not only word-of-mouth promotion.',
}

export default function Post() {
  return (
    <article>
      <header className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <Link href="/blog" className="mb-6 inline-block text-asili-gold hover:text-white">← Back to blog</Link>
          <p className="mb-3 text-sm text-gray-300">November 2026 · SkillVault · Future of work · 6 min read</p>
          <h1 className="text-white">Skills need proof, not just promotion</h1>
        </div>
      </header>
      <div className="section-container prose-body max-w-3xl py-16">
        <p>A talented hair stylist may have years of experience and a loyal group of customers. A make-up artist may have a portfolio full of excellent work. A barber may be known in their neighbourhood for consistency and care. Yet when a new customer searches online, that experience can be difficult to see.</p>
        <p>This is one of the gaps in how service work is discovered. Many independent professionals rely on referrals, social media posts, informal networks and repeat customers. These channels matter, but they can be fragmented. A recommendation may sit in a WhatsApp conversation, photographs may be scattered across social accounts, and a person's work history may exist only in the memories of previous customers.</p>
        <p>The result is a visibility problem. Customers may struggle to compare providers or judge whether someone is right for a particular job. Professionals may struggle to communicate the quality and range of their services beyond the people who already know them.</p>
        <h2 className="mb-4 mt-12">A profile should show more than a name</h2>
        <p>A useful professional profile can bring together the information a customer needs to make a more informed choice: the services offered, examples of previous work, service area, availability, clear expectations and feedback from completed jobs. It should help a professional explain what they do without requiring them to become a marketing expert.</p>
        <p>But a profile alone is not enough. Trust grows when information is connected to real interactions. A request is made, a professional responds, both sides agree on the work, the job is completed and the customer can leave relevant feedback. Over time, that history can become evidence of reliability and experience.</p>
        <p>This does not mean every rating is automatically fair or every review is true. Any platform in this space must think carefully about fake reviews, harassment, unfair complaints, privacy and dispute handling. Verification should be transparent: people should understand what has been checked and what has not.</p>
        <h2 className="mb-4 mt-12">The idea behind SkillVault</h2>
        <p>SkillVault is being developed around this problem. The direction is a services marketplace combined with a digital work identity: a place where personal-service professionals can present their skills and services, receive relevant customer requests, respond to opportunities and build a record of completed work.</p>
        <p>The initial focus is intentionally narrow: hair, beauty and grooming professionals in one Johannesburg community. Starting with a defined group makes it possible to understand how customers find providers, what information helps them choose, how professionals prefer to receive requests and what makes both sides feel safe.</p>
        <p>The intended journey is straightforward: a professional creates a profile and lists services; a customer describes what they need; relevant professionals can respond; the customer and provider agree on the details; and, after the work is completed, both sides can confirm the outcome and provide feedback.</p>
        <p>This is product direction, not a claim that all these features are already live. The current work is focused on requirements, user journeys and a realistic minimum viable product. Payments, automated matching and AI features should only be introduced when they solve a validated problem and can be supported responsibly.</p>
        <h2 className="mb-4 mt-12">Start with trust, then scale</h2>
        <p>A marketplace is not successful simply because it has many profiles. It is useful when customers can find suitable professionals and professionals receive worthwhile opportunities. That requires local density, clear expectations, responsive support and rules that protect both sides.</p>
        <p>For that reason, SkillVault's first milestone is not to cover every service category or every city. It is to learn whether a focused community can use the product to make better connections and whether the resulting work history is valuable to professionals and customers.</p>
        <p>The broader idea is simple: skills deserve to be seen, and good work should be easier to demonstrate. A person's professional credibility should not depend only on having a formal CV or knowing the right people.</p>
        <p>If you provide hair, beauty or grooming services in Johannesburg, or you regularly hire these services, we would value your perspective as we shape the pilot. Contact <a href={`mailto:${site.email}`} className="font-semibold text-asili-green underline">{site.email}</a>.</p>
      </div>
    </article>
  )
}
