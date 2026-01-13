import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBrain, FaLightbulb, FaInfinity, FaNetworkWired, FaRocket, FaSeedling, FaCompass } from "react-icons/fa";
import { GiMeditation, GiAbstract024 } from "react-icons/gi";
import { MdOutlinePsychology, MdAutoGraph } from "react-icons/md";
import { IoSparkles } from "react-icons/io5";


const Beyond = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    
   
  }, []);

  return (
    <main className="font-sans text-white bg-black overflow-x-hidden relative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900/20 to-indigo-900/20 pointer-events-none"></div>
      
      {/* Floating particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
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
        

        {/* Dynamic gradient orbs that follow mouse */}
        <div 
         
        />

        
       
        {/* Content overlay */}
        <div className="relative z-20 flex flex-col justify-center items-center text-center px-6">
          <div className="mb-6" data-aos="zoom-in">
            <FaBrain className="text-7xl md:text-8xl mx-auto mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight" data-aos="fade-down">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">
              Beyond
            </span>
            <br />
            <span className="text-white">The Horizon</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl text-gray-300 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Journey into the depths of consciousness. Where <span className="text-cyan-400 font-semibold">thought</span> meets <span className="text-purple-400 font-semibold">reality</span>, and <span className="text-pink-400 font-semibold">imagination</span> becomes infinite.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4" data-aos="fade-up" data-aos-delay="400">
            <button className='relative group w-64 h-14 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]'>
              <div className='absolute inset-[2px] bg-black rounded-full flex items-center justify-center gap-2 font-semibold text-lg transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400'>
                <IoSparkles className="text-xl" />
                Begin Journey
              </div>
            </button>
            
            <a
              href="https://www.psychologytoday.com/us/basics/consciousness"
              target="_blank"
              rel="noopener noreferrer"
              className='relative group w-64 h-14 border-2 border-purple-500 rounded-full flex items-center justify-center gap-2 font-semibold text-lg transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]'
            >
              <FaCompass className="text-xl" />
              Explore Mind
            </a>
          </div>
        </div>

       
      </section>

      {/* Floating Cards Section */}
      <section className="relative py-32 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4" data-aos="fade-down">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Mental Dimensions
            </span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto" data-aos="fade-up">
            Explore the infinite realms of human consciousness
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div 
              className="group relative bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
              data-aos="fade-up"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-3xl transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <FaLightbulb className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Creative Insight</h3>
                <p className="text-gray-300 leading-relaxed">
                  Imagination fuels innovation and unlocks new perspectives. Every breakthrough begins with a single thought.
                </p>
                <div className="mt-6 flex items-center text-cyan-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-semibold">Discover more</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              className="group relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-3xl transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <MdOutlinePsychology className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Conscious Awareness</h3>
                <p className="text-gray-300 leading-relaxed">
                  Awareness helps us connect deeply with ourselves and others. The key to understanding lies within.
                </p>
                <div className="mt-6 flex items-center text-purple-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-semibold">Explore depth</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              className="group relative bg-gradient-to-br from-pink-900/30 to-cyan-900/30 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/20 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-cyan-500/0 group-hover:from-pink-500/10 group-hover:to-cyan-500/10 rounded-3xl transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <FaInfinity className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pink-300">Limitless Expansion</h3>
                <p className="text-gray-300 leading-relaxed">
                  Meditation opens doors to peace, clarity, and infinite growth. Your potential knows no bounds.
                </p>
                <div className="mt-6 flex items-center text-pink-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-semibold">Unlock potential</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div 
              className="group relative bg-gradient-to-br from-indigo-900/30 to-cyan-900/30 backdrop-blur-xl rounded-3xl p-8 border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-cyan-500/0 group-hover:from-indigo-500/10 group-hover:to-cyan-500/10 rounded-3xl transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <FaNetworkWired className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-300">Neural Networks</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your mind is a complex web of connections. Every thought creates new pathways to discovery.
                </p>
                <div className="mt-6 flex items-center text-indigo-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-semibold">Map connections</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div 
              className="group relative bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-indigo-500/0 group-hover:from-purple-500/10 group-hover:to-indigo-500/10 rounded-3xl transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <GiMeditation className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Inner Peace</h3>
                <p className="text-gray-300 leading-relaxed">
                  Find tranquility in the chaos. Meditation is your gateway to a calmer, more focused mind.
                </p>
                <div className="mt-6 flex items-center text-purple-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-semibold">Find balance</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div 
              className="group relative bg-gradient-to-br from-cyan-900/30 to-pink-900/30 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
              data-aos="fade-up"
              data-aos-delay="750"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:to-pink-500/10 rounded-3xl transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <FaRocket className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Rapid Growth</h3>
                <p className="text-gray-300 leading-relaxed">
                  Accelerate your mental evolution. Transform your thoughts into powerful actions and breakthroughs.
                </p>
                <div className="mt-6 flex items-center text-cyan-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-semibold">Launch forward</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="relative py-32 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4" data-aos="fade-down">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Your Mental Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-20 max-w-2xl mx-auto" data-aos="fade-up">
            Map your path through consciousness
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30"></div>

            {/* Timeline items */}
            <div className="space-y-32">
              {/* Item 1 */}
              <div className="relative flex items-center" data-aos="fade-right">
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300">
                    <div className="flex items-center justify-end gap-3 mb-3">
                      <FaSeedling className="text-2xl text-cyan-400" />
                      <h3 className="text-2xl font-bold text-cyan-300">Awareness</h3>
                    </div>
                    <p className="text-gray-300">Begin by recognizing your thoughts and emotions. Awareness is the first step to transformation.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black z-10"></div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Item 2 */}
              <div className="relative flex items-center" data-aos="fade-left">
                <div className="w-1/2 pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-black z-10"></div>
                <div className="w-1/2 pl-12">
                  <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <MdAutoGraph className="text-2xl text-purple-400" />
                      <h3 className="text-2xl font-bold text-purple-300">Understanding</h3>
                    </div>
                    <p className="text-gray-300">Connect patterns and relationships. Understanding deepens your insight into the workings of your mind.</p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex items-center" data-aos="fade-right">
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-gradient-to-br from-pink-900/40 to-pink-800/20 backdrop-blur-xl rounded-2xl p-6 border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300">
                    <div className="flex items-center justify-end gap-3 mb-3">
                      <GiAbstract024 className="text-2xl text-pink-400" />
                      <h3 className="text-2xl font-bold text-pink-300">Transformation</h3>
                    </div>
                    <p className="text-gray-300">Shape your reality through conscious thought. Transformation is the art of becoming who you're meant to be.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-400 rounded-full border-4 border-black z-10"></div>
                <div className="w-1/2 pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-cyan-900/40 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-purple-500/30 overflow-hidden" data-aos="zoom-in">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-xy"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Mapping Your Mental Landscape
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Connect the dots between thought, emotion, and imagination. Visualize your inner world and shape the future you want to live.
              </p>
              <a
                href="https://www.psychologytoday.com/us/basics/consciousness"
                target="_blank"
                rel="noopener noreferrer"
                className='inline-block relative group w-64 h-14 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]'
              >
                <div className='absolute inset-[2px] bg-black rounded-full flex items-center justify-center gap-2 font-semibold text-lg transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400'>
                  <FaBrain className="text-xl" />
                  Explore Your Mind
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Beyond;