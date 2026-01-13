import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBrain, FaEye, FaNetworkWired, FaRegLightbulb, FaRocket, FaSeedling, FaInfinity, FaFlask } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { IoSparkles } from "react-icons/io5";

const Consciousness = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
      }, []);

  return (
    <main className="bg-black text-white font-sans overflow-x-hidden relative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900/10 to-indigo-900/10 pointer-events-none"></div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-20 overflow-hidden">
        {/* Dynamic gradient orb */}
        <div 
          className="absolute w-[600px] h-[600px] "
          
        />

        {/* Content */}
        <div className="relative z-20">
          <div className="mb-8" data-aos="zoom-in">
            <div className="relative inline-block">
              <FaBrain className="text-9xl md:text-[12rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 animate-pulse" />
              <div className="absolute "></div>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-extrabold mb-6 leading-tight" data-aos="fade-down">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">
              Consciousness
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="200">
            Explore the journey of <span className="text-purple-400 font-semibold">awareness</span>, 
            <span className="text-indigo-400 font-semibold"> perception</span>, and 
            <span className="text-pink-400 font-semibold"> thought</span> — where philosophy meets science.
          </p>

         
        </div>
      </section>

      {/* Section 1: What is Consciousness */}
      <section className="relative py-32 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="relative group" data-aos="zoom-in">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            
            {/* Content card */}
            <div className="relative bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-purple-500/30 group-hover:border-purple-400/60 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-indigo-500/0 group-hover:from-purple-500/10 group-hover:to-indigo-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <FaBrain className="text-4xl text-white" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-400">
                    What is Consciousness?
                  </span>
                </h2>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Consciousness is our awareness of ourselves and the world. It's the experience of being alive, feeling, and thinking — where <span className="text-purple-400 font-semibold">reality</span> meets <span className="text-indigo-400 font-semibold">perception</span> and <span className="text-pink-400 font-semibold">imagination</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Levels of Consciousness */}
      <section className="relative py-32 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20" data-aos="fade-down">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Levels of Consciousness
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore the different states and depths of conscious awareness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaEye,
                title: "Alertness",
                description: "Full awareness of surroundings and thoughts. Enables reasoning, decision-making, and interaction.",
                color: "green",
                gradient: "from-green-900/40 to-emerald-800/20",
                border: "border-green-500/30 hover:border-green-400/60",
                hover: "hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]",
                iconBg: "from-green-400 to-emerald-600",
                titleColor: "text-green-300",
                linkColor: "text-green-400"
              },
              {
                icon: GiMeditation,
                title: "Meditation & Flow",
                description: "Deep focus and mindful awareness expand consciousness beyond ordinary alertness.",
                color: "blue",
                gradient: "from-blue-900/40 to-cyan-800/20",
                border: "border-blue-500/30 hover:border-blue-400/60",
                hover: "hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
                iconBg: "from-blue-400 to-cyan-600",
                titleColor: "text-blue-300",
                linkColor: "text-blue-400"
              },
              {
                icon: FaRegLightbulb,
                title: "Sleep & Dreams",
                description: "Altered states where perception shifts, memory consolidates, and creativity emerges.",
                color: "yellow",
                gradient: "from-yellow-900/40 to-amber-800/20",
                border: "border-yellow-500/30 hover:border-yellow-400/60",
                hover: "hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]",
                iconBg: "from-yellow-400 to-amber-600",
                titleColor: "text-yellow-300",
                linkColor: "text-yellow-400"
              }
            ].map((level, index) => {
              const Icon = level.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${level.gradient} backdrop-blur-xl rounded-3xl p-8 border ${level.border} transition-all duration-500 hover:scale-105 ${level.hover}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                    level.color === 'green' 
                      ? 'bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-green-500/10'
                      : level.color === 'blue'
                      ? 'bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/10'
                      : 'bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/10 group-hover:to-yellow-500/10'
                  }`}></div>
                  <div className="relative z-10 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${level.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                      <Icon className="text-4xl text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${level.titleColor}`}>{level.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{level.description}</p>
                    <div className={`flex items-center justify-center ${level.linkColor} group-hover:translate-y-1 transition-transform duration-300`}>
                      <span className="text-sm font-semibold">Learn more</span>
                      <span className="ml-2">↓</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Types of Consciousness */}
      <section className="relative py-32 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20" data-aos="fade-down">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Types of Consciousness
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understanding the different forms of conscious experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FaNetworkWired,
                title: "Phenomenal",
                description: "The raw subjective experience of sensations, emotions, and thoughts — \"what it feels like\" to experience reality.",
                gradient: "from-pink-900/40 to-rose-800/20",
                border: "border-pink-500/30 hover:border-pink-400/60",
                hover: "hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]",
                iconBg: "from-pink-400 to-rose-600",
                titleColor: "text-pink-300",
                linkColor: "text-pink-400"
              },
              {
                icon: FaRegLightbulb,
                title: "Access",
                description: "The aspect of consciousness that can be reported, reasoned about, and used to guide behavior.",
                gradient: "from-yellow-900/40 to-amber-800/20",
                border: "border-yellow-500/30 hover:border-yellow-400/60",
                hover: "hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]",
                iconBg: "from-yellow-400 to-amber-600",
                titleColor: "text-yellow-300",
                linkColor: "text-yellow-400"
              }
            ].map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${type.gradient} backdrop-blur-xl rounded-3xl p-10 border ${type.border} transition-all duration-500 hover:scale-105 ${type.hover}`}
                  data-aos={index === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 200}
                >
                  <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                    type.gradient.includes('pink') 
                      ? 'bg-gradient-to-br from-pink-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:to-pink-500/10'
                      : 'bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/10 group-hover:to-yellow-500/10'
                  }`}></div>
                  <div className="relative z-10 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${type.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                      <Icon className="text-4xl text-white" />
                    </div>
                    <h3 className={`text-3xl font-bold mb-4 ${type.titleColor}`}>{type.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{type.description}</p>
                    <div className={`flex items-center justify-center mt-6 ${type.linkColor} group-hover:translate-x-2 transition-transform duration-300`}>
                      <span className="text-sm font-semibold">Explore type</span>
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Major Theories */}
      <section className="relative py-32 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20" data-aos="fade-down">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Major Theories
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Scientific frameworks explaining the nature of consciousness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Workspace",
                description: "Consciousness arises when information is shared globally across the brain's network.",
                icon: FaNetworkWired,
                gradient: "from-purple-900/40 to-indigo-800/20",
                border: "border-purple-500/30 hover:border-purple-400/60",
                hover: "hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]",
                iconBg: "from-purple-400 to-indigo-600",
                titleColor: "text-purple-300"
              },
              {
                title: "Integrated Information",
                description: "Awareness comes from highly interconnected neural systems — more integration equals richer experience.",
                icon: FaBrain,
                gradient: "from-indigo-900/40 to-blue-800/20",
                border: "border-indigo-500/30 hover:border-indigo-400/60",
                hover: "hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]",
                iconBg: "from-indigo-400 to-blue-600",
                titleColor: "text-indigo-300"
              },
              {
                title: "Embodied Consciousness",
                description: "Consciousness emerges from the dynamic interaction between brain, body, and environment.",
                icon: FaFlask,
                gradient: "from-blue-900/40 to-cyan-800/20",
                border: "border-blue-500/30 hover:border-blue-400/60",
                hover: "hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
                iconBg: "from-blue-400 to-cyan-600",
                titleColor: "text-blue-300"
              }
            ].map((theory, index) => {
              const Icon = theory.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${theory.gradient} backdrop-blur-xl rounded-3xl p-8 border ${theory.border} transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${theory.hover}`}
                  data-aos="flip-up"
                  data-aos-delay={index * 200}
                >
                  <div className="relative z-10 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${theory.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                      <Icon className="text-3xl text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${theory.titleColor}`}>{theory.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{theory.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Why It Matters */}
      <section className="relative py-32 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Background glow */}
            <div className="absolute "></div>
            
            {/* Content card */}
            <div className="relative  p-12 md:p-16 overflow-hidden" data-aos="zoom-in">
              {/* Animated background gradient */}
              <div className="absolute  "></div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">
                    Why Understanding Consciousness Matters
                  </span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                  Studying consciousness helps us understand ourselves, improve medicine, advance AI research, and tackle philosophical questions about reality and experience.
                </p>

                {/* Feature grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {[
                    { icon: FaSeedling, text: "Self Understanding", color: "purple" },
                    { icon: FaRocket, text: "Medical Advances", color: "indigo" },
                    { icon: FaInfinity, text: "AI Research", color: "pink" }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    const featureStyles = {
                      purple: {
                        bg: 'from-purple-900/40 to-purple-800/20',
                        border: 'border-purple-500/30 hover:border-purple-400/60',
                        icon: 'text-purple-400'
                      },
                      indigo: {
                        bg: 'from-indigo-900/40 to-indigo-800/20',
                        border: 'border-indigo-500/30 hover:border-indigo-400/60',
                        icon: 'text-indigo-400'
                      },
                      pink: {
                        bg: 'from-pink-900/40 to-pink-800/20',
                        border: 'border-pink-500/30 hover:border-pink-400/60',
                        icon: 'text-pink-400'
                      }
                    };
                    const style = featureStyles[item.color] || featureStyles.purple;
                    
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
                  href="https://plato.stanford.edu/entries/consciousness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block relative group w-72 h-16 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                >
                  <div className="absolute inset-[2px] bg-black rounded-full flex items-center justify-center gap-2 font-semibold text-lg transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400">
                    <IoSparkles className="text-xl" />
                    Explore Deeper
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

export default Consciousness;
