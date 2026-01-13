import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBrain, FaInfinity, FaLayerGroup, FaEye, FaRocket, FaSeedling } from "react-icons/fa";
import { GiMeditation, GiAbstract024, GiBrain } from "react-icons/gi";
import { MdOutlinePsychology, MdAutoGraph, MdLayers } from "react-icons/md";
import { IoSparkles } from "react-icons/io5";
import hImage from '../assets/h.png'; 


const Dimensions = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const layers = [
    { name: "Conscious", color: "cyan", icon: FaEye, description: "The surface layer of awareness" },
    { name: "Subconscious", color: "purple", icon: FaLayerGroup, description: "The hidden depths of memory" },
    { name: "Unconscious", color: "pink", icon: GiBrain, description: "The deepest realm of the mind" }
  ];

  return (
    <main className="bg-black text-white font-sans overflow-x-hidden relative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900/10 to-cyan-900/10 pointer-events-none"></div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-20 overflow-hidden">
        {/* Dynamic gradient orb */}
        <div 
          
        />

     
        {/* Content */}
        <div className="relative z-20">
          <div className="mb-8" data-aos="zoom-in">
            <div className="relative inline-block">
              <FaBrain className="text-9xl md:text-[12rem] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse" />
              <div className="absolute "></div>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-extrabold mb-6 leading-tight" data-aos="fade-down">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Brain
            </span>
            <br />
            <span className="text-white">Dimensions</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="200">
            Explore the <span className="text-cyan-400 font-semibold">layers</span> of consciousness, 
            <span className="text-purple-400 font-semibold"> cognition</span>, and 
            <span className="text-pink-400 font-semibold"> mental landscapes</span>. 
            Unlock creativity, awareness, and inner understanding.
          </p>

          {/* Dimension indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="400">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const colorClasses = {
                cyan: {
                  border: activeLayer === index ? 'border-cyan-400 bg-cyan-900/30' : 'border-cyan-500/30 hover:border-cyan-400/60',
                  icon: 'text-cyan-400'
                },
                purple: {
                  border: activeLayer === index ? 'border-purple-400 bg-purple-900/30' : 'border-purple-500/30 hover:border-purple-400/60',
                  icon: 'text-purple-400'
                },
                pink: {
                  border: activeLayer === index ? 'border-pink-400 bg-pink-900/30' : 'border-pink-500/30 hover:border-pink-400/60',
                  icon: 'text-pink-400'
                }
              };
              const classes = colorClasses[layer.color] || colorClasses.cyan;
              
              return (
                <div
                  key={index}
                  className={`group relative px-6 py-3 rounded-full border-2 transition-all duration-300 cursor-pointer ${classes.border}`}
                  onMouseEnter={() => setActiveLayer(index)}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`${classes.icon} text-xl`} />
                    <span className="font-semibold">{layer.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

         
        </div>
      </section>

      {/* Section 1 – Consciousness with Image Reveal */}
      <section className="relative py-32 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="relative z-10" data-aos="fade-right">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
                  <FaEye className="text-2xl text-white" />
                </div>
                <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Dimension One</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Consciousness
                </span>
                <br />
                <span className="text-white">& Awareness</span>
              </h2>
              
              <p className="text-gray-300 leading-relaxed text-lg md:text-xl mb-8">
                Awareness allows us to perceive ourselves and our surroundings. Consciousness is the foundation of thoughts, emotions, and perception—the gateway to understanding reality.
              </p>

              {/* Feature list */}
              <div className="space-y-4">
                {[
                  "Self-awareness and introspection",
                  "Perception of external reality",
                  "Foundation of thought processes"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image with creative reveal */}
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                {/* Image container */}
                <div className="relative bg-gradient-to-br from-cyan-900/40 to-purple-900/40 backdrop-blur-xl rounded-3xl p-4 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                  <img
                    src={hImage}
                    alt="Consciousness Illustration"
                    className="relative z-10 w-full h-auto rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 – Cognitive Layers with Interactive Cards */}
      <section className="relative py-32 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20" data-aos="fade-down">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center">
                <MdLayers className="text-2xl text-white" />
              </div>
              <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Dimension Two</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Cognitive Layers
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our mind has multiple layers: conscious, subconscious, and unconscious. Each influences behavior, creativity, and decision-making.
            </p>
          </div>

          {/* Interactive Layer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const cardStyles = {
                cyan: {
                  bg: 'from-cyan-900/40 to-cyan-800/20',
                  border: 'border-cyan-500/30 hover:border-cyan-400/60',
                  hover: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]',
                  overlay: 'from-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-cyan-500/10',
                  iconBg: 'from-cyan-400 to-cyan-600',
                  title: 'text-cyan-300',
                  link: 'text-cyan-400'
                },
                purple: {
                  bg: 'from-purple-900/40 to-purple-800/20',
                  border: 'border-purple-500/30 hover:border-purple-400/60',
                  hover: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]',
                  overlay: 'from-purple-500/0 group-hover:from-purple-500/10 group-hover:to-purple-500/10',
                  iconBg: 'from-purple-400 to-purple-600',
                  title: 'text-purple-300',
                  link: 'text-purple-400'
                },
                pink: {
                  bg: 'from-pink-900/40 to-pink-800/20',
                  border: 'border-pink-500/30 hover:border-pink-400/60',
                  hover: 'hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]',
                  overlay: 'from-pink-500/0 group-hover:from-pink-500/10 group-hover:to-pink-500/10',
                  iconBg: 'from-pink-400 to-pink-600',
                  title: 'text-pink-300',
                  link: 'text-pink-400'
                }
              };
              const style = cardStyles[layer.color] || cardStyles.cyan;
              
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${style.bg} backdrop-blur-xl rounded-3xl p-8 border ${style.border} transition-all duration-500 hover:scale-105 ${style.hover}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  onMouseEnter={() => setActiveLayer(index)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${style.overlay} rounded-3xl transition-all duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${style.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                      <Icon className="text-3xl text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${style.title}`}>{layer.name}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{layer.description}</p>
                    <div className={`flex items-center ${style.link} group-hover:translate-x-2 transition-transform duration-300`}>
                      <span className="text-sm font-semibold">Explore layer</span>
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image Section */}
          
        </div>
      </section>

      {/* Section 3 – Mind Expansion with Meditation Focus */}
      <section className="relative py-32 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Background glow */}
            <div className="absolute "></div>
            
            {/* Content card */}
            <div className="relative  p-12 md:p-16  overflow-hidden" data-aos="zoom-in">
              {/* Animated background gradient */}
              <div className="absolute   "></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center">
                    <GiMeditation className="text-3xl text-white animate-pulse" />
                  </div>
                  <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Dimension Three</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    Meditation
                  </span>
                  <br />
                  <span className="text-white">& Infinite Potential</span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Meditation and introspection expand the mind, unlocking creativity, focus, and mental clarity. 
                  Explore the <span className="text-cyan-400 font-semibold">infinite potential</span> within and 
                  discover the <span className="text-purple-400 font-semibold">boundless dimensions</span> of your consciousness.
                </p>

                {/* Feature grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {[
                    { icon: FaSeedling, text: "Mental Growth", color: "cyan" },
                    { icon: FaRocket, text: "Rapid Expansion", color: "purple" },
                    { icon: FaInfinity, text: "Infinite Potential", color: "pink" }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    const featureStyles = {
                      cyan: {
                        bg: 'from-cyan-900/40 to-cyan-800/20',
                        border: 'border-cyan-500/30 hover:border-cyan-400/60',
                        icon: 'text-cyan-400'
                      },
                      purple: {
                        bg: 'from-purple-900/40 to-purple-800/20',
                        border: 'border-purple-500/30 hover:border-purple-400/60',
                        icon: 'text-purple-400'
                      },
                      pink: {
                        bg: 'from-pink-900/40 to-pink-800/20',
                        border: 'border-pink-500/30 hover:border-pink-400/60',
                        icon: 'text-pink-400'
                      }
                    };
                    const style = featureStyles[item.color] || featureStyles.cyan;
                    
                    return (
                      <div
                        key={idx}
                        className={`bg-gradient-to-br ${style.bg} backdrop-blur-xl rounded-2xl p-6 border ${style.border} transition-all duration-300 hover:scale-105`}
                        data-aos="fade-up"
                        data-aos-delay={idx * 100}
                      >
                        <Icon className={`text-4xl ${style.icon} mb-3 mx-auto`} />
                        <p className="font-semibold text-lg">{item.text}</p>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <a
                  href="https://www.psychologytoday.com/us/basics/consciousness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block relative group w-72 h-16 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                >
                  <div className="absolute inset-[2px] bg-black rounded-full flex items-center justify-center gap-2 font-semibold text-lg transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400">
                    <IoSparkles className="text-xl" />
                    Explore Your Mind
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dimensions;
