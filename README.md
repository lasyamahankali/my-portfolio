# Lasya Mahankali — Portfolio

Premium, futuristic portfolio website for **Lasya Mahankali** — Computer Science Engineer & AI/ML Enthusiast. Built as a static **React 18 + Vite 5** SPA styled with **Tailwind CSS v4** and a custom glassmorphism dark theme. The contact form is powered by the **EmailJS browser SDK**, so the site is fully static and deploys anywhere — including **GitHub Pages**.

---

## ✨ Features

- Fully static React + Vite build (no server runtime)
- Tailwind CSS v4 with custom glassmorphism utilities
- Lucide + React Icons for skills, projects, certifications
- Sonner toast notifications for the contact form
- EmailJS contact form (client-side, no backend)
- Optimized/lazy-loaded images (WebP + JPEG `<picture>` fallback)
- Accessible: skip-to-content, ARIA labels, semantic HTML, focus rings, reduced-motion support
- SEO-ready: Open Graph, Twitter cards, JSON-LD Person schema

---

## 🚀 Run Locally

### Prerequisites
- Node.js ≥ 18 (LTS recommended)
- npm (or pnpm / yarn / bun)

### 1. Install
```bash
npm install
```

### 2. Configure EmailJS (optional, for the contact form)
Copy `.env.example` to `.env` and fill in your credentials from the [EmailJS Dashboard](https://dashboard.emailjs.com/):
```bash
cp .env.example .env
```
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
The form still renders without them — submissions just show a "not configured" toast.

### 3. Start the dev server
```bash
npm run dev
```
Open http://localhost:8080.

### 4. Build for production
```bash
npm run build      # emits ./dist
npm run preview    # preview the production build locally
```

---

## 📁 Project Structure

```
.
├── public/                  # Static files served as-is
│   ├── robots.txt
│   ├── 404.html             # GitHub Pages SPA fallback
│   └── Lasya_Mahankali_Resume.pdf
├── src/
│   ├── assets/              # Optimized images + resume (bundled by Vite)
│   │   ├── lasya-portrait.jpg
│   │   ├── lasya-portrait.webp
│   │   └── Lasya_Mahankali_Resume.pdf
│   ├── App.tsx              # Entire portfolio UI
│   ├── main.tsx             # React entry + <Toaster />
│   └── styles.css           # Tailwind v4 + glassmorphism theme
├── .github/workflows/deploy.yml   # GitHub Pages CI
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
├── vite-env.d.ts
└── vite.config.ts
```

---

## 🌐 Deploy to GitHub Pages

### Option A — Automated (recommended)

1. Create a new GitHub repo, e.g. **`my-portfolio`**.
2. In `vite.config.ts`, make sure `base` matches your repo name:
   ```ts
   base: "/my-portfolio/",
   ```
   (For `username.github.io` user sites or a custom domain, use `base: "/"`.)
3. Push the code:
   ```bash
   git init && git add . && git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/my-portfolio.git
   git push -u origin main
   ```
4. In the repo → **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
5. Add EmailJS repo secrets (Settings → Secrets and variables → Actions → New repository secret):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. The included `.github/workflows/deploy.yml` runs on every push to `main`, builds `dist/`, and publishes it. Your site will be live at:
   ```
   https://<your-username>.github.io/my-portfolio/
   ```

### Option B — Manual (`gh-pages` branch)

```bash
npm run build
npx gh-pages -d dist
```
Then in **Settings → Pages**, set **Source** to the `gh-pages` branch and `/ (root)`.

---

## ☁️ Deploy Elsewhere

Because this is a plain static build, any static host works:

- **Vercel / Netlify:** import the repo, build command `npm run build`, output directory `dist`. Add `VITE_EMAILJS_*` env vars in the dashboard, and set `base: "/"` in `vite.config.ts`.
- **Cloudflare Pages / Firebase Hosting / S3:** upload the contents of `dist/` after `npm run build`.

---

## 📬 EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. **Email Services** → connect Gmail / Outlook / etc. (send to `lasya.mhk@gmail.com`).
3. **Email Templates** → create a template with variables:
   `{{from_name}}`, `{{from_email}}`, `{{reply_to}}`, `{{subject}}`, `{{message}}`, `{{to_email}}`.
4. **Account → General** → copy the **Public Key**.
5. Paste the three IDs into `.env` (locally) and repo secrets (for GitHub Pages).

All EmailJS values are **publishable** — safe to expose in the client bundle.

---

## 🛠 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server on http://localhost:8080 |
| `npm run build` | Type-check + production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run deploy` | Publish `dist/` to the `gh-pages` branch |

---

## 📄 License & Credits

Designed & built by **Lasya Mahankali**.
© 2026 Lasya Mahankali. All rights reserved.
