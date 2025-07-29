import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Zap, Coffee, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <Mail className="text-pink-400" size={24} />,
      title: "Email",
      value: "palishma.0812@gmail.com",
      href: "mailto:hello@devspace.com",
      description: "Drop me a line anytime"
    },
    // {
    //   icon: <Phone className="text-magenta-400" size={24} />,
    //   title: "Phone",
    //   value: "+1 (555) 123-CODE",
    //   href: "tel:+15551232633",
    //   description: "Let's talk it through"
    // },
    {
      icon: <MapPin className="text-pink-400" size={24} />,
      title: "Location",
      value: "San Francisco, CA",
      href: "#",
      description: "Available worldwide"
    },
    {
      icon: <Calendar className="text-magenta-400" size={24} />,
      title: "Schedule",
      value: "Book a Call",
      href: "#",
      description: "30-min strategy session"
    }
  ];

  const socialLinks = [
    { 
      icon: <Github size={24} />, 
      name: "GitHub", 
      href: "#", 
      color: "hover:text-gray-300",
      followers: "2.5K"
    },
    { 
      icon: <Linkedin size={24} />, 
      name: "LinkedIn", 
      href: "#", 
      color: "hover:text-blue-400",
      followers: "5K+"
    },
    { 
      icon: <Twitter size={24} />, 
      name: "Twitter", 
      href: "#", 
      color: "hover:text-blue-300",
      followers: "1.2K"
    },
    { 
      icon: <MessageCircle size={24} />, 
      name: "Discord", 
      href: "#", 
      color: "hover:text-indigo-400",
      followers: "Dev Community"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-magenta-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-6xl md:text-7xl font-black mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-pink-400 via-magenta-500 to-pink-600 bg-clip-text text-transparent">
              LET'S BUILD
            </span>
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-pink-500 to-magenta-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto mt-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Ready to turn your vision into reality? Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Coffee className="text-pink-400" size={28} />
                Let's Grab Coffee (Virtually)
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm always excited to discuss new projects, innovative ideas, or just chat about the latest in tech. 
                Whether you're a startup looking to disrupt an industry or an established company ready to innovate, 
                I'm here to help bring your vision to life.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a 
                  key={index}
                  href={method.href}
                  className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/30 hover:border-pink-400/50 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-pink-500/20 to-magenta-500/20 rounded-full group-hover:scale-110 transition-transform duration-200 border border-pink-500/30">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white group-hover:text-pink-300 transition-colors duration-200 mb-1">
                        {method.title}
                      </h4>
                      <p className="text-pink-400 font-semibold mb-1">{method.value}</p>
                      <p className="text-gray-400 text-sm">{method.description}</p>
                    </div>
                  </div>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-magenta-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="text-magenta-400" size={20} />
                Connect With Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className={`group flex items-center space-x-3 p-4 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-pink-500/20 hover:border-pink-400/40 transform hover:scale-105 transition-all duration-300 text-gray-400 ${social.color}`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-200">
                      {social.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{social.name}</div>
                      <div className="text-xs text-gray-500">{social.followers}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Send className="text-pink-400" size={24} />
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-pink-400 transition-colors duration-200">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-pink-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-400 transition-all duration-200 text-white placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-pink-400 transition-colors duration-200">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-pink-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-400 transition-all duration-200 text-white placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-pink-400 transition-colors duration-200">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-pink-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-400 transition-all duration-200 text-white placeholder-gray-500"
                    placeholder="Let's build something amazing!"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-pink-400 transition-colors duration-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/30 border border-pink-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-400 transition-all duration-200 resize-none text-white placeholder-gray-500"
                    placeholder="Tell me about your project, your vision, or just say hello..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-pink-500 via-magenta-500 to-pink-600 text-white py-4 px-8 rounded-xl font-bold hover:shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-magenta-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;