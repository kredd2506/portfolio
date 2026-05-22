# manishkreddy.com

Personal portfolio of **Manish K Reddy** — Google Summer of Code 2025 contributor, venture analyst, deep tech entrepreneur.

Live at [manishkreddy.com](https://manishkreddy.com).

## Stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Geist](https://vercel.com/font) (Sans + Mono)
- MDX via [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- Hosted on [Vercel](https://vercel.com/), DNS at Namecheap
- Bootstrapped from the [Nextfolio](https://github.com/1msirius/Nextfolio) template — a full revamp is planned

## Local development

Requires [pnpm](https://pnpm.io/installation).

```bash
pnpm install
pnpm dev
```

Dev server runs at [http://localhost:3000](http://localhost:3000).

## Project layout

- `app/` — App Router pages, components, layout, config
- `app/page.tsx` — homepage (hero, experience timeline, project carousel)
- `app/config.ts` — site metadata + social links
- `app/projects/project-data.ts` — featured projects feed
- `content/` — MDX blog posts (currently empty)
- `public/` — static assets (profile photo, OG image, project photos)

## Deployment

Pushes to `main` auto-deploy via Vercel. Build runs `next build`; output is served from `.next` with the **Next.js** framework preset (do **not** leave the preset as "Other" — it serves edge 404s).

## License

MIT — see [LICENSE](LICENSE).
