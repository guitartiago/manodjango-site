# Mano Django — Next.js One Page

Stack: **Next.js (App Router) + React + TypeScript + TailwindCSS + Framer Motion**

## Rodar local
```bash
npm i
npm run dev
# abre http://localhost:3000
```

## Build
```bash
npm run build
npm start
```

## Deploy (Vercel)
- Importe este repositório na Vercel (ou `vercel` CLI) e pronto.
- Depois, no WordPress, crie a Home com um `<iframe>` apontando para o subdomínio, se quiser embutir.

## Estrutura
- `app/page.tsx`: toda a one page (Hero, Manifesto, Integrantes, Setlist, Contato, Footer)
- `app/layout.tsx`: layout base + `globals.css`
- `tailwind.config.js`, `postcss.config.js`: Tailwind
