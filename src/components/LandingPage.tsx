import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  ArrowRight, 
  Sparkles,
  Network,
  Cpu,
  Eye,
  ChevronDown
} from 'lucide-react';

interface LandingPageProps {
  onEnter: () => void;
}

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
    whileHover={{ scale: 1.02, y: -5 }}
  >
    <div className="text-purple-400 mb-4 group-hover:text-cyan-400 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const StatCard: React.FC<{
  value: string;
  label: string;
  delay: number;
}> = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="text-center"
  >
    <div className="text-3xl md:text-4xl font-bold gradient-text-purple mb-2">
      {value}
    </div>
    <div className="text-gray-400 text-sm">{label}</div>
  </motion.div>
);

export const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
        }}
      />
      
      {/* Neural network pattern */}
      <div className="absolute inset-0 bg-neural-pattern opacity-20" />
      
      {/* Bolt.new badge */}
      <motion.a
        href="https://bolt.new/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 z-50 glass rounded-full p-2 hover:bg-white/20 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <img 
          src="https://bolt.new/logo.png" 
          alt="Built with Bolt.new" 
          className="w-8 h-8"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = '<div class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">B</div>';
          }}
        />
      </motion.a>

      {/* Header */}
      <motion.header 
        className="relative z-10 px-4 md:px-8 py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
              <img 
                src="/api/placeholder/48/48" 
                alt="Synth3sis Logo" 
                className="w-10 h-10 rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<Brain class="w-6 h-6 text-white" />';
                }}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Synth3sis</h1>
              <p className="text-sm text-gray-400">Unified Cognitive Intelligence</p>
            </div>
          </div>
          
          <motion.div 
            className="text-xs text-gray-400 text-right hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div>Powered by</div>
            <div className="text-or4cl3-primary font-semibold">Or4cl3 AI Solutions</div>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative z-10 px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text-purple">Evolve Intelligence.</span>
              <br />
              <span className="text-white">Vibe Code Reality.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The frontier for decentralized, co-evolutionary cognitive collaboration where 
              intelligence, creativity, and code adapt and thrive in symbiosis with humanity.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={onEnter}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 animate-pulse-glow mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <span>Enter the Cognitive Realm</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <StatCard value="<100ms" label="Response Latency" delay={0.7} />
            <StatCard value="60 FPS" label="3D Performance" delay={0.8} />
            <StatCard value="94.2%" label="Agent Accuracy" delay={0.9} />
            <StatCard value="99.95%" label="Platform Stability" delay={1.0} />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Three Pillars of Consciousness
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Unifying SOLUS, QSCI, and EvOS-AI + InfiniGen into a singular cognitive entity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="Daedalus Consciousness"
              description="Recursive LLM architecture with ethical oversight and multi-agent orchestration for autonomous cognitive evolution."
              delay={1.0}
            />
            <FeatureCard
              icon={<Network className="w-8 h-8" />}
              title="Neural Substrate Layer"
              description="Hybrid transformer and graph neural networks with quantum-inspired processing for enhanced decision-making."
              delay={1.1}
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="EchoNode Mesh"
              description="Decentralized knowledge propagation with CRDT consensus mechanisms for real-time collaboration."
              delay={1.2}
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Σ-Matrix Engine"
              description="Multi-tiered ethical validation with constitutional AI fusion and autonomous self-stabilization."
              delay={1.3}
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="InfiniGen Evolution"
              description="Metaprogramming core with G-RAG code blueprint mutation and real-time logic rewriting."
              delay={1.4}
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="DreamWeaver Studio"
              description="Multimodal content generation with AI band jamming and biometric feedback integration."
              delay={1.5}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="relative z-10 px-4 md:px-8 py-8 border-t border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2024 Synth3sis. Pioneering the future of cognitive intelligence.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Powered by</span>
            <span className="text-or4cl3-primary font-semibold">Or4cl3 AI Solutions</span>
          </div>
        </div>
      </motion.footer>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
      </motion.div>
    </div>
  );
};