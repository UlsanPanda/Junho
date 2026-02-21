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

## Site structure

- **Home** (`/`) — Hero, explore links, projects
- **About** (`/about`) — Your bio (from `portfolio.ts`)
- **Contact** (`/contact`) — Get in touch, email, LinkedIn
- **Campus** (`/campus`) — Campus involvement (clubs, activities)
- **Skills** (`/skills`) — Certifications and skills

## Customize your content

Edit **`src/data/portfolio.ts`** to update:

- **site** — name, tagline, email, LinkedIn
- **about** — heading and bio (shown on About page)
- **projects** — title, description, link, tags (shown on Home)
- **campusInvolvement** — name, role, description, period for each club/activity
- **skills** — certifications (name, issuer, year) and skillGroups (title + items array)

## Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `npm run dev`    | Start dev server (HMR)   |
| `npm run build`  | Build for production     |
| `npm run preview`| Preview production build |

## Deploy with GitHub + Vercel

### 1. Push to GitHub

Create a new repository on [GitHub](https://github.com/new) (e.g. `junho-lee-portfolio`). Do **not** add a README or .gitignore—you already have them. Then run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with **GitHub**.
2. Click **Add New…** → **Project**.
3. **Import** your portfolio repo from the list (authorize Vercel to access GitHub if asked).
4. Vercel will detect Vite automatically. Keep the defaults:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**.

Your site will get a URL like `your-project.vercel.app`. Every push to `main` will trigger a new deployment. You can add a custom domain in the project’s **Settings → Domains**.
