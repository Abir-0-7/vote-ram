# Vote RAM: manifesto site
Next.js (static export) + TypeScript + Tailwind CSS v4 + Motion for React.

## Run
    npm install && npm run dev

## Deploy
Push to `main`. In GitHub: Settings > Pages > Source: **GitHub Actions**.

## Update progress
Edit `public/progress.json` (change `done`, `updated`, `status`) and commit. The site redeploys in about a minute.

## Add awards or certificates
Put images in `public/certs/` and add entries to `awards` / `certificates` in `src/data/content.ts`.
