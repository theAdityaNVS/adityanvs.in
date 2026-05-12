# Infrastructure Overview - Portfolio (adityanvs.in)

## Vercel Deployment
- **Project Name:** `adityanvs.in`
- **Production URL:** [adityanvs.in](https://www.adityanvs.in)

## Supabase (Database & Auth)
- **Project Name:** `adityanvs.in`
- **Reference ID:** `jwtaicnzhiqcgbwghlnw`
- **Region:** Southeast Asia (Singapore)
- **Services Used:**
  - Supabase Auth
  - PostgreSQL (Direct & Pooled)
  - Prisma (via `POSTGRES_PRISMA_URL`)

## Google Cloud (GCP)
- **Service:** Gemini API (Generative AI)
- **Key Location:** `VITE_GEMINI_API_KEY` (Managed via Vercel Env)
