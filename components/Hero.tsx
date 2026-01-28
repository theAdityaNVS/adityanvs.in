import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter, ChevronDown, MousePointer2 } from 'lucide-react';
import { SOCIALS, RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Glass Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl animate-[fadeIn_1s_ease-out] hover:scale-105 transition-transform cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-slate-200 font-medium text-sm tracking-wide">OPEN TO WORK</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight animate-[fadeIn_1.2s_ease-out] tracking-tight">
          Designing the <br />
          <span className="relative inline-block">
             <span className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-xl"></span>
             <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-shine bg-[length:200%_auto]">Invisible.</span>
          </span>
        </h1>
        
        <p className="text-xl text-slate-300/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-[fadeIn_1.4s_ease-out] font-light">
          {RESUME_DATA.bio}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-[fadeIn_1.6s_ease-out]">
          <a href="#projects" className="px-8 py-4 bg-white text-darker rounded-full font-bold hover:bg-slate-200 transition-all flex items-center gap-2 group shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transform hover:-translate-y-1">
            Explore Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 glass-panel rounded-full font-semibold text-white hover:bg-white/10 transition-all transform hover:-translate-y-1">
            Get in Touch
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 animate-[fadeIn_1.8s_ease-out]">
          {SOCIALS.map((social) => (
            <a 
                key={social.platform} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
                {social.icon === 'github' && <Github size={22} />}
                {social.icon === 'linkedin' && <Linkedin size={22} />}
                {social.icon === 'twitter' && <Twitter size={22} />}
            </a>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 cursor-pointer hover:text-white transition-colors" 
        onClick={() => document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'})}
      >
        <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Scroll Down</span>
            <ChevronDown size={20} className="opacity-75" />
        </div>
      </div>
    </section>
  );
};

export default Hero;