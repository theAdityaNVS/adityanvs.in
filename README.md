# 🚀 Aditya.nvs Portfolio

A Next-Gen Developer Portfolio featuring a high-performance **Cyberpunk / Glassmorphism** aesthetic, powered by **React 18**, **TypeScript**, and **Tailwind CSS**.

![Preview](https://media.discordapp.net/attachments/example-preview.png)
*(Replace with your actual screenshot)*

## ✨ Key Features

### 🎨 Visual & UI Experience
- **Liquid Gradient Backgrounds**: Dynamic, animated blobs that move fluidly in the background, creating a "living" atmosphere.
- **Cyber Grid Overlay**: A subtle, scrolling grid effect adding depth and a sci-fi touch.
- **Glassmorphism Design**: Frosted glass panels (`backdrop-filter: blur`) used across cards, navbars, and overlays.
- **3D Tilt Effects**: Project cards respond to mouse movement with a 3D parallax tilt.
- **Magnetic Navigation**: Navigation links and buttons snap magnetically to the cursor for a satisfying tactile feel.
- **Decrypted Text Animation**: value-reveal text effects on hover and load.
- **Scroll Reveal**: Elements smoothly ease in as you scroll down the page.

### 🛠️ Functional Capabilities
- **AI Assistant (Gemini)**: A fully functional chatbot integrated with Google's Gemini AI to answer questions about my resume and experience contextually.
- **Supabase Contact Form**: 
  - Real-time storing of messages in a PostgreSQL database.
  - **Spam Protection**: Custom honeypot fields and client-side rate limiting (1 hour cooldown).
- **Responsive Mobile Navigation**: A custom-built, portal-based mobile menu that ensures smooth, full-screen overlay interaction without z-index clipping issues.
- **GitHub Stats Integration**: Fetches and visualizes GitHub activity and contribution data.

## ⚡ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Core** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, Lucide React (Icons) |
| **Animation** | Framer Motion, CSS Keyframes |
| **Backend** | Supabase (PostgreSQL), Google Gemini API |
| **Deployment** | Vercel |

## 📂 Project Structure

```bash
├── components/
│   ├── layout/       # Navbar, Footer, Mobile Menu Portal
│   ├── sections/     # Hero, About, Skills, Experience, Contact
│   ├── ui/           # Reusable: TiltCard, MagneticWrapper, DecryptedText
│   └── AIAssistant.tsx # Gemini Chatbot Component
├── data/             # constants.ts (Resume data source)
├── utils/            # Supabase client setup
└── docs/             # Setup & Deployment guides
```

## 🚀 Getting Started

Follow the detailed guides in the `docs/` folder:

1.  **[Installation & Local Setup](docs/01-setup.md)**: How to run the project on your machine.
2.  **[Deployment & Supabase](docs/deployment.md)**: How to deploy to Vercel and connect the Supabase database.

## 🛡️ Environment Variables

To run this project, you need the following keys in your `.env` file (or Vercel Dashboard):

```env
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
VITE_GEMINI_API_KEY=...
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
*Built with ❤️ by Aditya Nadamuni*
