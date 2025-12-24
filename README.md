# Ehsan Rasheed — Portfolio

A modern, minimal, and professional portfolio built with React + Vite, styled with Tailwind CSS, and animated using Framer Motion.

## Features
- Clean, handcrafted feel (no gradients)
- Soft neutral palette, subtle shadows, smooth transitions
- Responsive on all devices
- Sections: Hero, About, Projects, Contact, Footer
- Small-scale animations (fade-in, slide-up)

## Getting Started

### Prerequisites
- Node.js 18+

### Install & Run
```bash
npm install
npm run dev
```
App runs on http://localhost:5173

### Build
```bash
npm run build
npm run preview
```

## Deploy to Vercel

### One-time setup (CLI):
```bash
npm install -g vercel
vercel login
```

### Deploy (from project root):
```bash
vercel
vercel --prod
```
The `vercel.json` sets `buildCommand` to `npm run build` and `outputDirectory` to `dist`.

## Customize
- Update profile links in `src/components/Footer.jsx`.
- Add real GitHub URLs in `src/data/projects.js`.
- Tweak theme in `tailwind.config.js`.
