import React, { useMemo } from 'react';
import { Calendar } from 'lucide-react';
import { EXPERIENCE } from '../../data/constants';
import TiltCard from '../ui/TiltCard';
import { ChaseLogo, TCSLogo, HackerEarthLogo, LingoJrLogo } from '../ui/CompanyLogos';
import DefaultCompanyLogo from '../ui/DefaultCompanyLogo';

const Experience: React.FC = () => {
  // Mapping logic to get the right logo component
  const getLogoComponent = (logoId: string | undefined, companyName: string) => {
    switch (logoId) {
      case 'jpmc':
        return <ChaseLogo />;
      case 'tcs':
        return <TCSLogo />;
      case 'hackerearth':
        return <HackerEarthLogo />;
      case 'lingojr':
        return <LingoJrLogo />;
      default:
        return <DefaultCompanyLogo name={companyName} />;
    }
  };

  // Generate random bubbles with logos
  const logoBubbles = useMemo(() => {
    const logos = ['jpmc', 'tcs', 'hackerearth', 'lingojr'];
    return Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        logo: logos[i % logos.length],
        size: Math.random() * 40 + 30, // 30px to 70px
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 10 + 15}s`, // 15s to 25s
        delay: `${Math.random() * 10}s`,
        opacity: Math.random() * 0.1 + 0.05
    }));
  }, []);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
        {/* Floating Logo Bubbles Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
            {logoBubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="absolute rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/5 animate-fly"
                    style={{
                        width: bubble.size,
                        height: bubble.size,
                        left: bubble.left,
                        animationDuration: bubble.duration,
                        animationDelay: bubble.delay,
                        opacity: bubble.opacity,
                        top: '100%' // Start from bottom
                    }}
                >
                    <div className="w-[60%] h-[60%] opacity-70 grayscale">
                        {getLogoComponent(bubble.logo, '')}
                    </div>
                </div>
            ))}
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {EXPERIENCE.map((job, index) => (
              <div key={job.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 -translate-x-2 md:-translate-x-1/2 bg-darker border-2 border-primary rounded-full z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)] mt-1.5">
                    <div className="w-full h-full rounded-full bg-primary animate-ping opacity-20"></div>
                </div>

                {/* Date Badge (Desktop: Opposite side) */}
                <div className={`hidden md:flex w-1/2 items-start ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-slate-300 backdrop-blur-sm">
                        <Calendar size={14} className="text-primary" />
                        {job.period}
                    </div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-8">
                  <TiltCard>
                    <div className="glass-panel p-6 rounded-3xl relative group hover:bg-white/10 transition-all duration-300 border-l-4 border-l-primary/50 md:border-l-0 md:border-t-4 md:border-t-primary/50 h-full">
                      
                      {/* Date Badge (Mobile) */}
                      <div className="md:hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300 mb-4">
                          <Calendar size={12} className="text-primary" />
                          {job.period}
                      </div>

                      <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                              {/* Logo Container */}
                              <div className="h-14 w-20 rounded-xl bg-transparent flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                                  {getLogoComponent(job.logo, job.company)}
                              </div>
                              <div className="flex-1">
                                  <h3 className="text-xl font-bold text-white leading-tight">{job.role}</h3>
                                  <p className="text-primary font-medium text-sm">{job.company}</p>
                              </div>
                          </div>
                      </div>
                      
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </TiltCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;