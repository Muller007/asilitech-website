# Asili Tech website content update

This update is written for the repository's existing stack:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- GitHub + Vercel deployment

## Files to replace

Copy the files in this bundle into the matching paths in your repository:

- `app/page.tsx`
- `app/about/page.tsx`
- `app/products/page.tsx`
- `app/progress/page.tsx`
- `app/collaborate/page.tsx`
- `lib/site.ts`

No new dependencies are required. Existing shared components, navigation, layout, styling tokens and Tailwind configuration are retained.

## Apply the update

1. Download and extract this ZIP.
2. In your local clone of `Muller007/asilitech-website`, replace the six files above.
3. Run `npm install` if needed.
4. Run `npm run build`.
5. Review all pages locally with `npm run dev`.
6. Commit and push to the GitHub `main` branch.
7. Vercel should automatically build and deploy if the repository is already connected.

## Important checks before deployment

- Confirm `hello@asilitech.com` is monitored.
- Confirm that the statements about AMKA's current implementation and testing are accurate before adding detailed claims elsewhere.
- The update deliberately describes SkillVault as being in product definition and MVP planning, not as a live beta.
- The update does not claim that the parent venture is a registered legal entity or that either product has launched.
- Confirm the public wording about your degree and current MSc enrolment is accurate.
- If you later have a real SkillVault landing page or waitlist, set `skillVaultUrl` in `lib/site.ts` to that exact URL.

## Content strategy

The revised site positions Asili Tech around economic participation:
- AMKA Finance: financial understanding and income records.
- SkillVault: professional identity, work evidence, customer discovery and opportunity.

It keeps the products distinct while explaining their shared purpose. It also changes the collaboration page to invite personal-service professionals and potential customers for the SkillVault pilot.


## Supabase-published website updates

The public website can display content created in the private Asili Tech Command Centre.

Add these environment variables to the Vercel project for this website (and to a local `.env.local` when developing):

- `NEXT_PUBLIC_SUPABASE_URL`: the Supabase project URL.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: the Supabase anon/publishable key.

Use the same Supabase project connected to the private Command Centre. The website reads from `public_content` through the anonymous REST API and requests only rows where `status = published` and `visibility = public`. Supabase Row Level Security remains the security boundary. Never add a `service_role` key to this website.

Published entries appear in the homepage's latest-updates section, at `/updates`, and on their own `/updates/[slug]` page. Existing homepage, product, research and progress content remains in place as a fallback; this first integration is additive and does not replace those sections.

The content fetch revalidates every 60 seconds. If the environment variables are not configured or Supabase is temporarily unavailable, the rest of the website continues to render and the updates list shows its empty state.
