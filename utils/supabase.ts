import { createClient } from '@supabase/supabase-js';

// Check for VITE_ prefix (local/manual) or NEXT_PUBLIC_ prefix (Vercel Integration)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate that the URL is actually a URL and not a placeholder
const isUrlValid = (url: string | undefined) => {
    return url && url.startsWith('http') && !url.includes('your_supabase_project_url');
};

if (!isUrlValid(supabaseUrl) || !supabaseAnonKey) {
    console.warn('Supabase credentials missing or invalid! Check your .env file.');
}

// Export a safer client initialization that won't crash the app if keys are missing/invalid
export const supabase = (isUrlValid(supabaseUrl) && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
