import React, { useMemo } from 'react';
import { Code, Database, Server, Wrench, Cpu, Globe, Layers, Smartphone, Layout, PenTool } from 'lucide-react';
import { SKILLS, SERVICES } from '../../data/constants';
import TiltCard from '../ui/TiltCard';
import { Icons } from '../ui/Icons';

const Skills: React.FC = () => {
  // Helper for Service icons (generic Lucide)
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'atom': return <Code />;
      case 'server': return <Server />;
      case 'database': return <Database />;
      case 'sparkles': return <Cpu />; 
      case 'container': return <Layers />; 
      case 'git-branch': return <Globe />;
      case 'app': return <Smartphone />;
      case 'palette': return <PenTool />;
      case 'layout': return <Layout />;
      default: return <Wrench />;
    }
  };

  // Helper for Tech Stack icons (Custom Brand SVGs)
  const getTechIcon = (iconName: string) => {
    if (Icons[iconName]) {
      return Icons[iconName];
    }
    // Fallback to Lucide if no specific SVG found
    return <Code />;
  };

  // Generate random bubbles with tech icons
  const skillBubbles = useMemo(() => {
    // List of keys from Icons.tsx + generic lucide
    const techKeys = ['react', 'java', 'springboot', 'aws', 'docker', 'redis', 'mongodb', 'typescript'];
    
    return Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        icon: techKeys[i % techKeys.length],
        size: Math.random() * 50 + 20, // 20px to 70px
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 15 + 15}s`, // 15s to 30s
        delay: `${Math.random() * 8}s`,
        opacity: Math.random() * 0.1 + 0.02 // Very subtle
    }));
  }, []);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
        {/* Floating Tech Bubbles Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
            {skillBubbles.map((bubble) => (
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
                    <div className="w-[50%] h-[50%] opacity-50 text-white">
                        {getTechIcon(bubble.icon)}
                    </div>
                </div>
            ))}
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              What I Do
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </div>

        {/* Services Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {SERVICES.map((service, index) => (
                <TiltCard 
                    key={index} 
                    className={`${index === 0 ? 'lg:col-span-2' : ''} h-full`}
                >
                  <div className={`glass-panel p-8 rounded-4xl flex flex-col items-start justify-between group hover:bg-white/10 transition-all duration-300 h-full ${index === 0 ? 'bg-gradient-to-br from-white/5 to-transparent' : ''}`}>
                      <div className="mb-6 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-inner">
                          {getServiceIcon(service.icon)}
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                      </div>
                  </div>
                </TiltCard>
            ))}
        </div>

        {/* Tech Stack Marquee / Cloud */}
        <div className="text-center mb-12">
            <h3 className="text-2xl font-display font-bold text-white mb-8">
              Technical Proficiency
            </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name}
              className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors group cursor-default"
            >
              <div className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors">
                {getTechIcon(skill.icon)}
              </div>
              <span className="text-xs font-semibold text-slate-300 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;