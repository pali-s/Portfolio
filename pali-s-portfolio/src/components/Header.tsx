import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Cursor Follower */}
      <div 
        className="fixed w-6 h-6 bg-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isScrolled ? 0.5 : 1})`
        }}
      />
      
      <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled||isMobileMenuOpen 
          ? 'bg-black/80 backdrop-blur-xl border-b border-pink-500/30' 
          : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <Code className="text-pink-500 group-hover:rotate-180 transition-transform duration-500" size={28} />
                <Zap className="absolute -top-1 -right-1 text-magenta-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={12} />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-pink-400 via-magenta-500 to-pink-600 bg-clip-text text-transparent">
                pali-s
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'projects', 'skills', 'contact'].map((section, index) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative text-white/80 hover:text-pink-400 transition-colors font-medium uppercase tracking-wider text-sm group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{section}</span>
                  <div className="absolute inset-0 bg-pink-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                </button>
              ))}
              <button className="bg-gradient-to-r from-pink-500 via-magenta-500 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold">
                <Download size={16} />
                RESUME
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white hover:text-pink-400 transition-colors relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} 
                />
                <X 
                  size={24} 
                  className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} 
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-4 pb-2 space-y-3">
              {['about', 'projects', 'skills', 'contact'].map((section, index) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left text-white/80 hover:text-pink-400 transition-colors font-medium uppercase tracking-wider text-sm py-2 px-4 rounded-lg hover:bg-pink-500/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {section}
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-pink-500 via-magenta-500 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 font-semibold mt-4">
                <Download size={16} />
                RESUME
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;