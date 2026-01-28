import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import AIAssistant from './components/AIAssistant';
import Contact from './components/sections/Contact';
import ScrollReveal from './components/ui/ScrollReveal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-darker text-slate-200 selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Spacer for aesthetics */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        
        <ScrollReveal>
          <Experience />
        </ScrollReveal>

        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      {/* Floating AI Chatbot - placed outside main to sit on top of everything */}
      <AIAssistant />
    </div>
  );
};

export default App;