import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Loader2, Send } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import DecryptedText from './ui/DecryptedText';
import { supabase } from '../utils/supabase';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(() => {
    return sessionStorage.getItem('contact_form_submitted') === 'true';
  });
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Anti-spam field (should remain empty)
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const checkRateLimit = () => {
    const lastSubmission = localStorage.getItem('last_submission_time');
    if (lastSubmission) {
      const timeDiff = Date.now() - parseInt(lastSubmission);
      // Limit: 1 submission per hour (3600000 ms)
      if (timeDiff < 3600000) {
        return false;
      }
    }
    return true;
  };

  // Validation & Sanitization
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sanitizeInput = (text: string) => {
    // Basic sanitization to strip potential HTML tags (SQL injection is handled by Supabase)
    return text.replace(/[<>]/g, '').trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission started");
    setError(null);
    setSuccess(false);

    // 1. Honeypot Check (Spam Bot Protection)
    if (formData.honeypot) {
      // If hidden field has value, it's likely a bot. Fake success.
      setSuccess(true);
      return;
    }

    // 2. Client-Side Rate Limit (IP limit requires backend)
    if (!checkRateLimit()) {
      console.warn("Rate limit hit");
      setError("You've already sent a message recently. Please try again later.");
      return;
    }

    // 3. Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // 4. Send to Supabase
      if (!supabase) {
        throw new Error("Supabase client not initialized. Check environment variables.");
      }

      // Ensure you have a table named 'messages' in your Supabase project
      // Supabase handles Parameterized Queries automatically, preventing SQL Injection
      const { error: supabaseError } = await supabase
        .from('messages')
        .insert([
          {
            name: sanitizeInput(formData.name),
            email: formData.email.trim().toLowerCase(), // normalize email
            message: sanitizeInput(formData.message),
            created_at: new Date().toISOString()
          }
        ]);

      if (supabaseError) throw supabaseError;

      // Success
      setSuccess(true);
      setFormData({ name: '', email: '', message: '', honeypot: '' });
      localStorage.setItem('last_submission_time', Date.now().toString());
      sessionStorage.setItem('contact_form_submitted', 'true');
      // Dispatch event for Navbar to pick up
      window.dispatchEvent(new Event("contactFormSubmitted"));

    } catch (err) {
      console.error('Submission error:', err);
      setError("Failed to send message. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-darker to-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              <DecryptedText text="Let's Create Something Amazing Together." />
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Me</p>
                  <p className="text-white font-medium">{RESUME_DATA.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white font-medium">{RESUME_DATA.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Availability</p>
                  <p className="text-green-400 font-medium">{RESUME_DATA.availability}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-slate-900 p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden" onSubmit={handleSubmit}>
            {/* Success Overlay */}
            {success && (
              <div className="absolute inset-0 bg-slate-900/95 flex flex-col items-center justify-center z-10 text-center p-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
              </div>
            )}

            {/* Hidden Honeypot Field */}
            <input
              type="text"
              id="honeypot"
              className="hidden"
              value={formData.honeypot}
              onChange={handleChange}
              autoComplete="off"
            />

            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              onClick={() => console.log('Submit button clicked')}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {/* Debug Info (Only shows if there are issues) */}
            <div className="mt-4 text-xs font-mono text-slate-500 text-center">
              <p>Status: {loading ? 'Sending...' : 'Idle'}</p>
              {!supabase && <p className="text-red-500">Supabase: Not Configured (Missing Keys)</p>}
            </div>
          </form>

        </div>

        {/* Deployment Info Section */}
        <div className="mt-20 pt-10 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm mb-4">Deployment Strategy</p>
          <div className="inline-flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-slate-300 text-sm">GitHub Pages (Static)</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-white/10 opacity-50">
              <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              <span className="text-slate-300 text-sm">Supabase (Backend)</span>
            </div>
          </div>
          <p className="text-slate-600 text-xs mt-4">
            &copy; {new Date().getFullYear()} {RESUME_DATA.name}. Built with React, Tailwind & Gemini AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;