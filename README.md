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
