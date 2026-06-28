import React, { Suspense, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AIAssistant from './components/AIAssistant';
import ScrollReveal from './components/ui/ScrollReveal';
import { Loader2 } from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Lazy load heavy sections for performance optimization
const Skills = React.lazy(() => import('./components/sections/Skills'));
const Experience = React.lazy(() => import('./components/sections/Experience'));
const Projects = React.lazy(() => import('./components/sections/Projects'));
const Contact = React.lazy(() => import('./components/sections/Contact'));
const GithubStats = React.lazy(() => import('./components/sections/GithubStats'));

const LoadingFallback = () => (
  <div className="py-20 flex justify-center items-center">
    <Loader2 className="animate-spin text-primary" size={32} />
  </div>
);

const App: React.FC = () => {
  // Fix for "showing contact info on load": Ensure page starts at top unless a specific hash is present
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
    
    // Add smooth scroll behavior to html programmatically if not in CSS
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen text-slate-200 selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Spacer for aesthetics */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <Suspense fallback={<LoadingFallback />}>
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
            <GithubStats />
          </ScrollReveal>
          
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </Suspense>
      </main>

      {/* Floating AI Chatbot - placed outside main to sit on top of everything */}
      <AIAssistant />
      
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
};

export default App;