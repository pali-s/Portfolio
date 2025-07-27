import React, { useState, useRef, useEffect } from 'react';
import { Code, Palette, Lightbulb, Target, Zap, Cpu, Rocket, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Code className="text-pink-400" size={32} />,
      title: "Code Architect",
      description: "Building scalable systems with clean, maintainable code that stands the test of time.",
      tech: ["React", "Node.js", "TypeScript", "Python"],
      color: "from-pink-500/20 to-magenta-500/20"
    },
    {
      icon: <Palette className="text-magenta-400" size={32} />,
      title: "Design Engineer",
      description: "Where aesthetics meet functionality - creating interfaces that users love to interact with.",
      tech: ["Figma", "CSS3", "Animation", "UX"],
      color: "from-magenta-500/20 to-pink-500/20"
    },
    {
      icon: <Cpu className="text-pink-400" size={32} />,
      title: "System Optimizer",
      description: "Performance-obsessed developer who makes applications lightning fast and efficient.",
      tech: ["Optimization", "Caching", "CDN", "Monitoring"],
      color: "from-pink-500/20 to-purple-500/20"
    },
    {
      icon: <Rocket className="text-magenta-400" size={32} />,
      title: "Innovation Driver",
      description: "Always exploring cutting-edge technologies and pushing the boundaries of what's possible.",
      tech: ["AI/ML", "WebGL", "PWA", "Microservices"],
      color: "from-purple-500/20 to-magenta-500/20"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Shipped", icon: <Zap className="text-pink-400" size={20} /> },
    { number: "3+", label: "Years Crafting", icon: <Target className="text-magenta-400" size={20} /> },
    { number: "∞", label: "Lines of Code", icon: <Code className="text-pink-400" size={20} /> },
    { number: "100%", label: "Passion Level", icon: <Heart className="text-magenta-400" size={20} fill="currentColor" /> }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-magenta-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-6xl md:text-7xl font-black mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-pink-400 via-magenta-500 to-pink-600 bg-clip-text text-transparent">
              ABOUT ME
            </span>
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-pink-500 to-magenta-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                I'm not your typical developer. I'm a <span className="font-bold text-pink-400">digital craftsman</span> who 
                believes every line of code should serve a purpose, every pixel should have meaning, and every user interaction 
                should spark joy.
              </p>
              <p>
                My journey started with curiosity and evolved into an obsession with creating 
                <span className="font-bold text-magenta-400"> exceptional digital experiences</span>. 
                I don't just solve problems – I reimagine possibilities.
              </p>
              <p>
                When I'm not architecting the next big thing, you'll find me contributing to open source, 
                mentoring fellow developers, or experimenting with emerging technologies that will shape tomorrow's web.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-pink-500/10 to-magenta-500/10 p-8 rounded-2xl border border-pink-500/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Lightbulb className="text-pink-400" size={24} />
                My Philosophy
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                "Code is poetry, design is storytelling, and user experience is the bridge between dreams and reality. 
                I'm here to build that bridge."
              </p>
            </div>
          </div>

          {/* Interactive Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br ${item.color} backdrop-blur-sm p-6 rounded-2xl border border-pink-500/30 hover:border-pink-400/50 transform hover:scale-105 transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: `${600 + index * 100}ms`,
                  transitionDelay: `${600 + index * 100}ms`
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="relative z-10">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className={`flex flex-wrap gap-2 transition-all duration-300 ${
                    activeCard === index ? 'opacity-100 max-h-20' : 'opacity-70 max-h-0 overflow-hidden'
                  }`}>
                    {item.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded text-xs font-medium border border-pink-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-magenta-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-pink-500/10 to-magenta-500/10 rounded-2xl border border-pink-500/30 backdrop-blur-sm hover:border-pink-400/50 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-400 to-magenta-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;