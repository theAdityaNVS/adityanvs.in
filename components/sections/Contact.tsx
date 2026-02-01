import React from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';
import { RESUME_DATA } from '../../data/constants';

const Contact: React.FC = () => {
  return (
    // Changed background to semi-transparent to allow grid visibility
    <section id="contact" className="py-24 bg-darker/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Let&apos;s Create Something Amazing Together.
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
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

          <form className="bg-slate-900/80 p-8 rounded-3xl border border-white/5 shadow-xl backdrop-blur-md" onSubmit={(e) => e.preventDefault()}>
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
        
        {/* Footer Content */}
        <div className="mt-20 pt-10 border-t border-white/5 text-center">
            <p className="text-slate-600 text-xs mt-4">
              &copy; {new Date().getFullYear()} {RESUME_DATA.name}. Built with React, Tailwind & Gemini AI.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;