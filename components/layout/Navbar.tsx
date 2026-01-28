import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import MagneticWrapper from '../ui/MagneticWrapper';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled ? 'pt-4' : 'pt-8'
      }`}
    >
      <div
        className={`
          relative flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isScrolled 
            ? 'glass-gel w-[90%] md:w-auto md:min-w-[600px] rounded-full px-6 py-3' 
            : 'w-full max-w-7xl px-6 py-4 bg-transparent'
          }
        `}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className={`p-1.5 rounded-lg transition-colors ${isScrolled ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white'}`}>
             <Terminal className="h-5 w-5" />
          </div>
          <span className={`font-display font-bold tracking-tight transition-all duration-300 ${isScrolled ? 'text-lg text-white' : 'text-xl md:text-2xl text-white'}`}>
            ADITYA<span className="text-primary">.DEV</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <MagneticWrapper key={link.name}>
              <a
                href={link.href}
                className={`
                  px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative overflow-hidden group block
                  ${isScrolled ? 'text-slate-300 hover:text-white hover:bg-white/10' : 'text-slate-300 hover:text-white'}
                `}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Subtle hover shine for links */}
                {!isScrolled && (
                   <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                )}
              </a>
            </MagneticWrapper>
          ))}
          
          <div className={`w-px h-6 mx-2 ${isScrolled ? 'bg-white/10' : 'bg-white/20'}`}></div>

          <MagneticWrapper>
            <a href="https://github.com/theAdityaNVS" target="_blank" rel="noopener noreferrer" className={`
                flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${isScrolled 
                  ? 'bg-primary text-white hover:bg-primary/90 shadow-[0_0_15px_rgba(99,102,241,0.4)]' 
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-sm'
                }
              `}
            >
              GitHub
            </a>
          </MagneticWrapper>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-darker/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`text-3xl font-display font-bold text-white hover:text-primary transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;