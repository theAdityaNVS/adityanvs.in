import React from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import DecryptedText from './ui/DecryptedText';

const Contact: React.FC = () => {
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

          <form className="bg-slate-900 p-8 rounded-3xl border border-white/5 shadow-xl" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input type="text" id="name" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input type="email" id="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>

        </div>
        
        {/* Deployment Info Section (as requested) */}
        <div className="mt-20 pt-10 border-t border-white/5 text-center">
            <p className="text-slate-500 text-sm mb-4">Deployment Strategy</p>
            <div className="inline-flex items-center justify-center gap-8 flex-wrap">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-white/10">
                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                   <span className="text-slate-300 text-sm">GitHub Pages (Static)</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-white/10 opacity-50">
                   <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                   <span className="text-slate-300 text-sm">Custom Domain (Future)</span>
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