# Copilot instructions

## Project overview
- Vite + React 18 + TypeScript single-page portfolio site.
- Entry point is index.tsx which renders App.tsx.
- App composes section components and wraps most sections in ScrollReveal with React.lazy/Suspense for load-splitting.

## Structure and patterns
- Section content lives in components/sections/* (Hero, Skills, Experience, Projects, GithubStats, Contact).
- Reusable UI effects live in components/ui/* (TiltCard, MagneticWrapper, DecryptedText, ScrollReveal).
- Layout components live in components/layout/*.
- Resume content and display data are centralized in data/constants.ts and typed in types.ts.

## Styling conventions
- Tailwind is loaded via CDN in index.html with custom theme extensions and global CSS.
- Global animations and utility classes (e.g., .reveal, glass-panel, cyber-grid) are defined in index.html; add new global styles there rather than a Tailwind config file.

## Integrations and data flow
- AI assistant: components/AIAssistant.tsx -> services/geminiService.ts uses @google/genai and a cached system prompt built from data/constants.ts.
- Contact form: components/sections/Contact.tsx -> utils/supabase.ts uses SUPABASE_URL and SUPABASE_ANON_KEY; inserts into the messages table and applies a client-side rate limit and honeypot.
- GitHub stats: components/sections/GithubStats.tsx loads images from /api/github-stats; api/github-stats.ts proxies external services and falls back to /public SVGs.
- Logging uses utils/logger.ts and is gated by import.meta.env.DEV or VITE_DEBUG.

## Environment variables
- Vite env prefix allows VITE_* and SUPABASE_* (see vite.config.ts).
- Required keys for local features: VITE_GEMINI_API_KEY, SUPABASE_URL, SUPABASE_ANON_KEY.

## Developer workflows
- dev: npm run dev
- build: npm run build
- preview: npm run preview
- test: npm run test
- lint: npm run lint (auto-fix enabled)
- format: npm run format (Prettier)
