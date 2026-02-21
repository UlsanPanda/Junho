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
