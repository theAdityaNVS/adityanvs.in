import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, X, ChevronDown, Sparkles, MapPin, Mail } from 'lucide-react';
import { SOCIALS, RESUME_DATA } from '../constants';
import MagneticWrapper from './ui/MagneticWrapper';
import TiltCard from './ui/TiltCard';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  
  const toRotate = [ "Full Stack Developer", "MERN Specialist", "UI/UX Engineer", "AI Integrator" ];

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    } else {
      if(!isDeleting && delta > 150) setDelta(100);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg animate-[fadeIn_1s_ease-out] hover:scale-105 transition-transform cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-slate-200 font-medium text-xs tracking-wider uppercase">Available for Hire</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1] animate-[fadeIn_1.2s_ease-out] tracking-tight">
              Hello, I&apos;m <br />
              {/* Glowing Name Effect */}
              <span className="relative inline-block mt-2">
                 <span className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-xl"></span>
                 <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-shine bg-[length:200%_auto]">Aditya.</span>
              </span>
            </h1>

            {/* Changing Text Effect */}
            <div className="h-[40px] mb-8 animate-[fadeIn_1.4s_ease-out]">
                <span className="text-xl md:text-2xl text-slate-300 font-light">
                    I am a <span className="text-white font-semibold border-r-2 border-primary pr-1 animate-pulse">{text}</span>
                </span>
            </div>
            
            <p className="text-xl text-slate-300/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-[fadeIn_1.4s_ease-out] font-light">
              {RESUME_DATA.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 animate-[fadeIn_1.6s_ease-out]">
              <MagneticWrapper strength={60}>
                <a href="#projects" className="px-8 py-4 bg-white text-darker rounded-full font-bold hover:bg-slate-200 transition-all flex items-center gap-2 group shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] w-full sm:w-auto justify-center">
                    View Portfolio
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticWrapper>
              
              <MagneticWrapper strength={60}>
                <a href="#contact" className="px-8 py-4 glass-panel rounded-full font-semibold text-white hover:bg-white/10 transition-all w-full sm:w-auto justify-center flex">
                    Let&apos;s Talk
                </a>
              </MagneticWrapper>
            </div>

            <div className="mt-12 flex items-center lg:justify-start justify-center gap-6 animate-[fadeIn_1.8s_ease-out]">
              {SOCIALS.map((social) => (
                <MagneticWrapper key={social.platform} strength={40}>
                    <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 block rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                    >
                        {social.icon === 'github' && <Github size={22} />}
                        {social.icon === 'linkedin' && <Linkedin size={22} />}
                        {social.icon === 'x' && <X size={22} />}
                    </a>
                </MagneticWrapper>
              ))}
            </div>
          </div>

          {/* Right Column: Glass Profile Card (Mobile Dev Aesthetic) */}
          <div className="flex-1 w-full max-w-md lg:max-w-full animate-[float_6s_ease-in-out_infinite] z-10 hidden md:block">
            <TiltCard>
                <div className="relative">
                    {/* Background Blobs for Card */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2.5rem] blur opacity-30"></div>
                    
                    {/* The Card */}
                    <div className="glass-panel rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                                <Sparkles className="text-yellow-400" size={24} />
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Experience</p>
                                <p className="text-xl font-bold text-white">4+ Years</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Based in</p>
                                        <p className="text-sm font-semibold text-white">{RESUME_DATA.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-full bg-purple-500/20 text-purple-400">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Email</p>
                                        <p className="text-sm font-semibold text-white">{RESUME_DATA.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Decor */}
                        <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-xs text-slate-500 font-mono">
                            <span>ID: DEV-2025</span>
                            <span>STATUS: ACTIVE</span>
                        </div>
                    </div>
                </div>
            </TiltCard>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button
        type="button"
        aria-label="Scroll to skills"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hover:text-white transition-colors"
        onClick={() => document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'})}
      >
        <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Scroll Down</span>
            <ChevronDown size={20} className="opacity-75" />
        </div>
      </button>
    </section>
  );
};

export default Hero;