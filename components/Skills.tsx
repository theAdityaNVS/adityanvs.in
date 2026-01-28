import React from 'react';
import { Code, Database, Server, Wrench, Cpu, Globe, Layers } from 'lucide-react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'atom': return <Code />;
      case 'server': return <Server />;
      case 'database': return <Database />;
      case 'sparkles': return <Cpu />; 
      case 'container': return <Layers />; 
      case 'git-branch': return <Globe />; 
      default: return <Wrench />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold text-white mb-6">Expertise & Stack</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            I craft digital products using a modern, scalable, and performance-focused technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name}
              className="glass-panel p-6 rounded-2xl group cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    {getIcon(skill.icon)}
                  </div>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">{skill.category}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                  {skill.name}
              </h3>
              
              <div className="relative w-full h-1.5 bg-slate-800/50 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  style={{ width: `${skill.level}%` }}
                >
                    <div className="absolute top-0 right-0 bottom-0 w-full animate-shine bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;