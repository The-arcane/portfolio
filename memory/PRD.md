# PRD — Raunaq Adlakha Portfolio v2.0 ("VOID//SIGNAL")

## Original Problem Statement
User's existing portfolio (raunaq-adlakha.vercel.app) ko inspect karke usi data se ek bilkul naya, "crazy techy", award-level portfolio banana tha — mobile + desktop dono friendly, jo dekhne wale ki aankhein khuli chhod de.

## User Persona
- Raunaq Adlakha — Full-Stack Developer, Founder (SparkEdge Innovations), AI Automation builder, society President (QuantaLoop), hackathon mentor. Delhi, BCA @ BVIMR (2024–27).
- Audience: recruiters, clients, founders, hackathon organizers.

## Architecture
- Frontend-only React (CRA + craco) — no backend dependency; all content static in `src/data/content.js`.
- Design system: near-black `#050505` + acid lime `#c8ff2e` + bone `#e8e6df`; Unbounded (display) + JetBrains Mono (body).
- Motion: framer-motion (scroll reveals, micro-interactions), Lenis (smooth momentum scroll), custom cursor, film-grain noise, scanlines.
- Assets self-hosted in `frontend/public/assets/` (resume.pdf + 7 images pulled from old site).

## Implemented (16 Sep 2026)
- Boot-sequence preloader with 0→100 counter + slide-up exit
- Kinetic hero: masked line-by-line name reveal, mouse-parallax 3D grid floor + glow orb, typing terminal line, rotating orbit badge, scroll fade-out
- Slow editorial marquee (skills/keywords)
- "The Manifesto" — 04 numbered chapters + stats strip (5+ clients, 100+ teams, 50+ members, 500+ users) + profile photo in clipped frame
- Career Log — 5 experience entries with sticky header + education card
- Selected Work — 6 real projects with spotlight hover, grayscale→color images, live-demo links where available
- The Toolbelt — interactive skill rows (hover fills acid)
- Proof of Work — achievements + Google Cloud certifications
- Contact — giant "LET'S BUILD SOMETHING INSANE", email, resume download, phone, socials, footer
- Full mobile responsiveness + full-screen mobile menu, scroll progress bar, custom cursor (desktop only)

## Verified
- Webpack compiles clean; HTTP 200; resume.pdf + images serve correctly
- Desktop + mobile screenshots across all sections; no console errors (only internal overlay telemetry noise)

## v2.1 Upgrades (16 Sep 2026 — "mind-blowing" pass)
- Hero: per-letter kinetic reveal + hover glitch effect on name, canvas particle field that repels/links around cursor, magnetic CTA buttons + orbit badge
- Scroll-velocity reactive marquee (speeds up / reverses / skews with scroll velocity)
- Selected Work converted to pinned horizontal-scroll rail on desktop (dynamic measured track, progress bar, "MORE ON GITHUB" end-cap); vertical stack retained on mobile
- "THE CREED" — word-by-word scroll-linked colorize statement with acid highlights
- Stats count-up animation (00→05+ etc.) on view
- Text scramble/decode effect on nav links (hover) and section titles (on scroll into view)
- Project screenshots now object-top cropped to avoid awkward center crops

## Verified v2.1
- Desktop: hero rest + glitch states, rail start/mid/end (end lands exactly on GitHub CTA), creed section reveal
- Mobile: hero fits without overflow, vertical work stack, no console errors

## Backlog / Next
- P0: Custom domain wiring (deploy + point raunaq's domain)
- P1: Contact form with backend lead capture + email notification
- P1: Blog/writing section ("LOGS")
- P2: Easter-egg terminal mode (press `~` for command palette)
- P2: Page transitions if more pages are added (project case-study pages)
- P2: OG share image + SEO meta polish
