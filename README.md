# Asili Tech website

Next.js 14 + Tailwind CSS. Content reflects the current status of the products and research.

## Run locally
    npm install
    npm run dev

## Before going live
1. Set up a mailbox for hello@asilitech.com, or change the address in `lib/site.ts`.
2. When AMKA has a public WhatsApp link, put it in `amkaWhatsAppUrl` in `lib/site.ts`. Same for `skillVaultUrl`.
3. Check the AMKA feature description on `app/products/page.tsx` against the build you actually deployed.
4. Update `app/progress/page.tsx` monthly. Only add numbers you can verify.

## Deploy (free)
1. Push this folder to a GitHub repo.
2. In Vercel, choose "Add New Project", import the repo and deploy. The free plan is enough for this site.
3. In Vercel, go to Settings → Domains and add asilitech.com. Vercel shows the DNS records to set at your registrar.

## Updating content
- Home, about, products, research, progress, collaborate: edit the matching file in `app/`.
- Blog: copy `app/blog/why-im-building-asili-tech/` to a new folder, edit the text, and add a card on `app/blog/page.tsx`.
