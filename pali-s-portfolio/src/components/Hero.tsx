import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Terminal, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const texts = ['FULL-STACK WEB DEVELOPER', 'CREATIVE CODER', 'PROBLEM SOLVER'];
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        if (currentText.length < current.length) {
          setCurrentText(current.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #ec4899 0%, #be185d 25%, #000000 70%)`
          }}
        />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={i}
                className="border border-pink-500/20 animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-pink-400 rounded-full animate-ping" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-magenta-400 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-magenta-300 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Terminal-style Header */}
        <div className="mb-8 inline-block">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-pink-500/30 font-mono text-left max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <Terminal className="text-pink-400 ml-auto" size={16} />
            </div>
            <div className="text-green-400 text-sm">
              <span className="text-pink-400">$</span> whoami
              <br />
              <span className="text-white">work in progress</span>
              <br />
              <span className="text-pink-400">$</span> status
              <br />
              <span className="text-magenta-400">ready_to_innovate</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <h1 className="text-7xl md:text-9xl font-black leading-none">
            <span className="block text-white mb-4">Palishma</span>
            <span className="block bg-gradient-to-r from-pink-400 via-magenta-500 to-pink-600 bg-clip-text text-transparent relative">
              Shakya
              <Sparkles className="absolute -top-4 -right-4 text-pink-400 animate-spin" size={32} />
            </span>
          </h1>
          
          <div className="h-20 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-bold text-pink-400 font-mono">
              {currentText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I don't just write code – I craft digital experiences that 
            <span className="text-pink-400 font-semibold"> push boundaries</span> and 
            <span className="text-magenta-400 font-semibold"> challenge conventions</span>
          </p>
          
          {/* Interactive Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group relative bg-gradient-to-r from-pink-500 via-magenta-500 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-bold overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                VIEW MY WORK
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-magenta-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="group border-2 border-pink-500 text-pink-400 px-12 py-4 rounded-full text-lg font-bold hover:bg-pink-500 hover:text-white transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">LET'S CONNECT</span>
              <div className="absolute inset-0 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>
          
          {/* Social Links with Hover Effects */}
          <div className="flex justify-center space-x-8 pt-8">
            {[
              { icon: Github, href: "https://github.com/pali-s", color: "hover:text-gray-300" },
              { icon: Linkedin, href: "https://linkedin.com/in/palishma-shakya-9a622529a", color: "hover:text-blue-400" },
              { icon: Mail, href: "#", color: "hover:text-green-400" }
            ].map(({ icon: Icon, href, color }, index) => (
              <a 
                key={index}
                href={href} 
                className={`text-gray-500 ${color} transform hover:scale-125 transition-all duration-300 relative group`}
              >
                <Icon size={32} />
                <div className="absolute inset-0 bg-current opacity-20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-pink-400 hover:text-pink-300 transition-colors duration-300 group"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-mono uppercase tracking-wider opacity-80">Scroll</span>
            <ChevronDown size={24} className="animate-bounce group-hover:animate-pulse" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;