# Sankalpa Sithmina — Portfolio

A single-page portfolio built with **React 18**, **Vite**, and **Tailwind CSS**. Features a decode-style loading animation, a colorful animated hero, scroll-reveal sections, a custom multi-dot cursor trail, and a fully responsive layout.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is output to `dist/` — deploy that folder to any static host (Vercel, Netlify, GitHub Pages, S3, etc.).

## Customizing content

Almost everything you'd want to change lives in **`src/data.js`**:

- `NAME`, `TITLE` — your name and headline
- `PROJECTS` — your project cards (title, tag, description, tech stack, accent color)
- `SKILLS` — grouped skill chips
- `EDUCATION` — your timeline entries
- `SOCIALS` — your social links
- `NAV_SECTIONS` — section labels for the nav

Colors and fonts are defined as design tokens in **`tailwind.config.js`** (`ink`, `surface`, `magenta`, `amber`, `mint`, `violet`) — change the hex values there to re-theme the whole site at once.

## Project structure

```
src/
  main.jsx              # React entry point
  App.jsx               # top-level layout & scroll-spy logic
  data.js                # all editable content
  index.css              # Tailwind directives + custom animations
  components/
    Loader.jsx            # boot/decode loading animation
    CursorTrail.jsx        # colorful trailing cursor effect
    Nav.jsx                 # dot nav + mobile menu
    Reveal.jsx               # scroll-reveal wrapper
    Hero.jsx, About.jsx, Projects.jsx, Skills.jsx, Education.jsx, Contact.jsx, Footer.jsx
```

## Notes

- The contact form is front-end only (`Contact.jsx`) — wire `handleSubmit` up to a service like Formspree, Resend, or your own API route to actually receive messages.
- Motion respects `prefers-reduced-motion`, and the cursor trail is disabled automatically on touch devices.
- Skill chips use real brand icons and colors via `react-icons/si` (Simple Icons), with a themed `lucide-react` icon as a fallback for skills that aren't a specific product (Design Systems, Accessibility, Motion Design, Testing). Add or change icons in `src/components/Skills.jsx`'s `ICON_MAP`.
