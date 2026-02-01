import React from 'react';
import { Code, Database, Server, Wrench, Cpu, Globe, Layers, Smartphone, Layout, PenTool } from 'lucide-react';
import { SKILLS, SERVICES } from '../constants';
import DecryptedText from './ui/DecryptedText';
import TiltCard from './ui/TiltCard';

const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
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

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              <DecryptedText text="What I Do" />
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
                          {getIcon(service.icon)}
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
              <DecryptedText text="Technical Proficiency" />
            </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name}
              className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors group cursor-default"
            >
              <div className="text-slate-400 group-hover:text-primary transition-colors">
                {getIcon(skill.icon)}
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