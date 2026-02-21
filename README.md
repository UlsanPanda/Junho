# Junho Lee — Personal Portfolio

A minimal, fast portfolio site built with **React**, **TypeScript**, and **Vite**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Font: Editorial Luxury

The site uses **Editorial Luxury** with **Cormorant Garamond** as a fallback (loaded from Google Fonts). If you have licensed Editorial Luxury font files:

1. Create a `public/fonts` folder and add your files (e.g. `EditorialLuxury-Regular.woff2`, `EditorialLuxury-Regular.woff`).
2. In `src/index.css`, uncomment the `@font-face` block at the top so the browser loads your font.

Until then, Cormorant Garamond gives a similar editorial serif look.

## Customize your content

Edit **`src/data/portfolio.ts`** to update:

- **Site** — name, tagline, email, and social links (GitHub, LinkedIn, Twitter)
- **About** — heading and short bio
- **Projects** — title, description, link, and tags for each project

No need to touch components unless you want to change layout or add sections.

## Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `npm run dev`    | Start dev server (HMR)   |
| `npm run build`  | Build for production     |
| `npm run preview`| Preview production build |

## Deploy

After `npm run build`, deploy the `dist` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).
