/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly SUPABASE_URL: string
    readonly SUPABASE_ANON_KEY: string
    readonly VITE_GEMINI_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
