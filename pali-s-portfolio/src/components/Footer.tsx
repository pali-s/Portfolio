import React from 'react';
import { Heart, ArrowUp, Code, Zap, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden border-t border-pink-500/20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-magenta-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Code className="text-pink-400" size={32} />
            <h3 className="text-3xl font-black bg-gradient-to-r from-pink-400 via-magenta-500 to-pink-600 bg-clip-text text-transparent">
              PALI-S
            </h3>
            <Zap className="text-magenta-400" size={32} />
          </div>
          
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg mb-8">
            Thanks for exploring my digital universe. Every project is a new adventure, 
            every challenge is an opportunity to innovate. Let's build the future together.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* <button className="group bg-gradient-to-r from-pink-500 via-magenta-500 to-pink-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
              <Coffee size={20} />
              Let's Collaborate
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-200" />
            </button> */}
            
            <div className="flex items-center gap-2 text-gray-400">
              <span>Available for</span>
              <span className="text-pink-400 font-semibold">Freelance Projects</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Crafted with</span>
              <Heart className="text-pink-500 animate-pulse" size={16} fill="currentColor" />
              <span className="text-gray-400">and lots of</span>
              <Coffee className="text-magenta-400" size={16} />
              <span className="text-gray-400">by</span>
              <span className="font-bold bg-gradient-to-r from-pink-400 to-magenta-400 bg-clip-text text-transparent">
                Palishma Shakya
              </span>
            </div>
            
            <div className="text-gray-500 text-sm">
              © {currentYear} Built with React & TypeScript.
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="group fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 via-magenta-500 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-300 z-50 border border-pink-400/30"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-200" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;