import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex items-end justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Selected Works</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
          </div>
          <p className="hidden md:block text-slate-400 max-w-sm text-right">
             A curation of projects leveraging modern tech stacks and AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="glass-panel rounded-3xl overflow-hidden group h-full flex flex-col refraction-shine"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/50 to-transparent opacity-90" />
                
                {/* Floating Action Button */}
                <div className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <a href={project.demoUrl || '#'} className="w-10 h-10 rounded-full bg-white text-darker flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                        <ArrowUpRight size={20} />
                    </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                            {tag}
                            </span>
                        ))}
                    </div>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;