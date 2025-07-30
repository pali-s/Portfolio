import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight, Play, Code2, Zap, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Catfood Conquest",
      subtitle: "Endless Runner Mobile Game Developed with Unity",
      description: "Storyline: Earth has run out of cat resources so the Cat Corp. has sent you on a special mission to distant planets to collect cat food. Your goal is to collect as much cat food as possible while avoiding obstacles.",
      image: "./images/card.png",
      tech: ["C#", "Unity"],
      featured: true,
      status: "Live",
      // metrics: { users: "50K+", performance: "99.9%", conversion: "+40%" }
    },
    {
      title: "Grant Hive",
      subtitle: "Centralized Scholarship Search and Post Engine for Students and Institutions Developed with MERN Stack",
      description: "Main Features: Search and apply to scholarships by universities, type, and location. Post scholarship opportunities for institutions.",
      image: "./images/card4.png",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
      featured: true,
      status: "Beta",
      // metrics: { queries: "1M+", speed: "< 100ms", accuracy: "99.7%" }
    },
    {
      title: "Lucky Find: Fishing Game",
      subtitle: "Luck-based fishing game Developed with React.js",
      description: "hmm, you just pick a fish and hopefully it's a **LOOOOONG** one, whoever catches the longest fish wins! Loser gets roasted.",
      image: "./images/card.png",
      tech: ["React.js", "Tailwind CSS"],
      featured: false,
      status: "Live",
      glink:"https://github.com/pali-s/fishing-game.git",
    },
    {
      title: "Girl Math",
      subtitle: "Budgeting App for the Girlies Developed with React Native",
      description: "Key Features: Track expenses, set budgets, and manage finances with a user-friendly interface designed for the girlies.",
      image: "./images/card3.png",
      tech: ["React Native", "TypeScript", "Node.js", "mongoDB"],
      featured: false,
      status: "Development",
      glink: "https://github.com/pali-s/expense-tracker-app.git"
    },
    // {
    //   title: "BlockVote",
    //   subtitle: "Decentralized Voting System",
    //   description: "Secure, transparent voting platform built on blockchain technology with zero-knowledge proofs and quantum-resistant encryption.",
    //   image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   tech: ["Solidity", "Web3.js", "IPFS", "React"],
    //   featured: false,
    //   status: "Research"
    // },
    // {
    //   title: "PropTech AI",
    //   subtitle: "Smart Real Estate Platform",
    //   description: "AI-driven real estate marketplace with virtual tours, price prediction, and automated property matching using computer vision.",
    //   image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   tech: ["Next.js", "Three.js", "Python", "OpenCV"],
    //   featured: false,
    //   status: "Live"
    // }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'Beta': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'Development': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'Research': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-40 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-magenta-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-6xl md:text-7xl font-black mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <span className="bg-gradient-to-r from-pink-400 via-magenta-500 to-pink-600 bg-clip-text text-transparent">
              MY PROJECTS
            </span>
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-pink-500 to-magenta-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`} />
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
            Welcome to my creative space!
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className={`text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
            <Star className="text-pink-400" size={28} fill="currentColor" />
            FEATURED WORK
            <Star className="text-magenta-400" size={28} fill="currentColor" />
          </h3>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-pink-500/30 hover:border-pink-400/50 transform hover:scale-[1.02] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>

                  {/* Action Buttons */}
                  <div className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${activeProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                    }`}>
                    <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-pink-500/20 transition-colors duration-200 border border-white/20">
                      <Play size={16} className="text-white" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-pink-500/20 transition-colors duration-200 border border-white/20">
                      <ExternalLink size={16} className="text-white" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-pink-500/20 transition-colors duration-200 border border-white/20">
                      <Github size={16} className="text-white" />
                    </button>
                  </div>

                  {/* Metrics Overlay */}
                  {project.metrics && (
                    <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${activeProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}>
                      <div className="flex justify-between text-xs">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-pink-500/30">
                            <div className="text-pink-400 font-bold">{value}</div>
                            <div className="text-gray-300 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-pink-400 font-semibold text-sm uppercase tracking-wider">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-pink-500/20 to-magenta-500/20 text-pink-300 px-3 py-1 rounded-full text-sm font-medium border border-pink-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-pink-400 font-semibold hover:text-magenta-400 transition-colors duration-200 group/btn">
                    <Code2 size={16} />
                    Explore Project
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-magenta-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className={`text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
            <Zap className="text-magenta-400" size={24} />
            HONORABLE MENTIONS
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-pink-500/20 hover:border-pink-400/40 transform hover:scale-105 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-pink-400 text-sm font-medium mb-3 uppercase tracking-wide">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-pink-500/10 text-pink-400 px-2 py-1 rounded text-xs font-medium border border-pink-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-pink-500/20 to-magenta-500/20 text-pink-300 py-2 rounded-lg text-sm font-medium hover:from-pink-500/30 hover:to-magenta-500/30 transition-all duration-200 border border-pink-500/30">
                      View
                    </button>
                    <a
                      href= {project.glink || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-pink-500/30 text-pink-400 rounded-lg hover:bg-pink-500/10 transition-colors duration-200 inline-flex items-center justify-center"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;