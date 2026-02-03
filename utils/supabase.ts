import { createClient } from '@supabase/supabase-js';

// These environment variables need to be set in your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials missing! Check your .env file or Vercel Environment Variables.');
}

// Export a safer client initialization that won't crash the app if keys are missing
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
