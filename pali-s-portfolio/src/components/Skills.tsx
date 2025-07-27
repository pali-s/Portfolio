import React, { useState, useRef, useEffect } from 'react';
import { Code2, Database, Palette, Globe, Smartphone, Cloud, Zap, Brain, Shield, Rocket } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill levels with staggered delays
          setTimeout(() => {
            skillCategories.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedLevels(prev => [...prev, index]);
              }, index * 200);
            });
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code2 className="text-pink-400" size={32} />,
      title: "Frontend Mastery",
      skills: ["React/Next.js", "TypeScript", "Vue.js", "Svelte", "WebGL", "Three.js"],
      level: 95,
      color: "from-pink-500 to-magenta-500",
      bgColor: "from-pink-500/10 to-magenta-500/10"
    },
    {
      icon: <Database className="text-magenta-400" size={32} />,
      title: "Backend Architecture",
      skills: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "GraphQL"],
      level: 92,
      color: "from-magenta-500 to-purple-500",
      bgColor: "from-magenta-500/10 to-purple-500/10"
    },
    {
      icon: <Brain className="text-pink-400" size={32} />,
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "OpenAI API", "Computer Vision", "NLP", "MLOps"],
      level: 88,
      color: "from-pink-500 to-red-500",
      bgColor: "from-pink-500/10 to-red-500/10"
    },
    {
      icon: <Cloud className="text-magenta-400" size={32} />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Monitoring"],
      level: 90,
      color: "from-magenta-500 to-blue-500",
      bgColor: "from-magenta-500/10 to-blue-500/10"
    },
    {
      icon: <Smartphone className="text-pink-400" size={32} />,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "PWA", "Expo"],
      level: 85,
      color: "from-pink-500 to-orange-500",
      bgColor: "from-pink-500/10 to-orange-500/10"
    },
    {
      icon: <Shield className="text-magenta-400" size={32} />,
      title: "Security & Blockchain",
      skills: ["Web3", "Solidity", "Cryptography", "OAuth", "JWT", "Penetration Testing"],
      level: 82,
      color: "from-magenta-500 to-green-500",
      bgColor: "from-magenta-500/10 to-green-500/10"
    }
  ];

  const tools = [
    { name: "VS Code", category: "Editor" },
    { name: "Figma", category: "Design" },
    { name: "Docker", category: "DevOps" },
    { name: "Postman", category: "API" },
    { name: "Git", category: "Version Control" },
    { name: "Notion", category: "Productivity" },
    { name: "Linear", category: "Project Management" },
    { name: "Vercel", category: "Deployment" },
    { name: "Supabase", category: "Backend" },
    { name: "Framer", category: "Prototyping" }
  ];

  const achievements = [
    { number: "50+", label: "Projects Delivered", icon: <Rocket className="text-pink-400" size={20} /> },
    { number: "3+", label: "Years Experience", icon: <Zap className="text-magenta-400" size={20} /> },
    { number: "25+", label: "Technologies", icon: <Code2 className="text-pink-400" size={20} /> },
    { number: "∞", label: "Learning Curve", icon: <Brain className="text-magenta-400" size={20} /> }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-magenta-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-6xl md:text-7xl font-black mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-pink-400 via-magenta-500 to-pink-600 bg-clip-text text-transparent">
              MY ARSENAL
            </span>
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-pink-500 to-magenta-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto mt-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            A comprehensive toolkit for building the impossible and making it look effortless.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${category.bgColor} backdrop-blur-sm p-8 rounded-3xl border border-pink-500/30 hover:border-pink-400/50 transform hover:scale-[1.02] transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium text-gray-300 border border-pink-500/20 hover:border-pink-400/40 hover:text-pink-300 transition-all duration-200 ${
                      activeCategory === index ? 'transform scale-105' : ''
                    }`}
                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
              
              {/* Proficiency Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400">Proficiency</span>
                  <span className="text-lg font-bold text-pink-400">{category.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${category.color} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{ 
                      width: animatedLevels.includes(index) ? `${category.level}%` : '0%',
                      transitionDelay: `${800 + index * 200}ms`
                    }}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-magenta-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Tools & Platforms */}
        <div className={`mb-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <Globe className="text-pink-400" size={28} />
            TOOLS & PLATFORMS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-4 rounded-2xl border border-pink-500/20 hover:border-pink-400/40 transform hover:scale-105 transition-all duration-300 text-center"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="text-white font-semibold mb-1 group-hover:text-pink-300 transition-colors duration-200">
                  {tool.name}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  {tool.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group text-center p-6 bg-gradient-to-br from-pink-500/10 to-magenta-500/10 backdrop-blur-sm rounded-2xl border border-pink-500/30 hover:border-pink-400/50 transform hover:scale-105 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-3 transform group-hover:scale-110 transition-transform duration-200">
                {achievement.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-400 to-magenta-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-200">
                {achievement.number}
              </div>
              <div className="text-gray-400 font-medium text-sm uppercase tracking-wider group-hover:text-gray-300 transition-colors duration-200">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;