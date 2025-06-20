import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Globe, 
  Shield, 
  Zap, 
  Settings,
  Menu,
  X,
  Home,
  Activity,
  Users,
  BarChart3
} from 'lucide-react';
import { useEvosStore } from '../store/evosStore';
import { DaedalusConsciousness } from './DaedalusConsciousness';
import { NeuralSubstrateLayer } from './NeuralSubstrateLayer';
import { EchoNodeMesh } from './EchoNodeMesh';
import { SigmaMatrixEngine } from './SigmaMatrixEngine';

const navigationItems = [
  { id: 'dashboard', label: 'Daedalus', icon: Brain, description: 'Consciousness Hub' },
  { id: 'neural', label: 'Neural', icon: Network, description: 'Substrate Layer' },
  { id: 'mesh', label: 'EchoNode', icon: Globe, description: 'Mesh Network' },
  { id: 'sigma', label: 'Σ-Matrix', icon: Shield, description: 'Ethics Engine' },
];

const MobileNavButton: React.FC<{
  item: typeof navigationItems[0];
  isActive: boolean;
  onClick: () => void;
}> = ({ item, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`flex flex-col items-center space-y-1 p-3 rounded-lg transition-all duration-300 ${
      isActive 
        ? 'bg-purple-600 text-white' 
        : 'text-gray-400 hover:text-white hover:bg-white/10'
    }`}
    whileTap={{ scale: 0.95 }}
  >
    <item.icon className="w-5 h-5" />
    <span className="text-xs font-medium">{item.label}</span>
  </motion.button>
);

const DesktopNavButton: React.FC<{
  item: typeof navigationItems[0];
  isActive: boolean;
  onClick: () => void;
}> = ({ item, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center space-x-3 w-full p-4 rounded-xl transition-all duration-300 group ${
      isActive 
        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' 
        : 'text-gray-300 hover:bg-white/10 hover:text-white'
    }`}
    whileHover={{ scale: 1.02, x: 5 }}
    whileTap={{ scale: 0.98 }}
  >
    <item.icon className="w-6 h-6" />
    <div className="text-left">
      <div className="font-semibold">{item.label}</div>
      <div className="text-xs opacity-70">{item.description}</div>
    </div>
  </motion.button>
);

const SystemMetrics: React.FC = () => {
  const { systemMetrics, agents } = useEvosStore();
  
  return (
    <motion.div 
      className="glass rounded-xl p-4 space-y-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-2 mb-3">
        <Activity className="w-5 h-5 text-green-400" />
        <h3 className="font-semibold text-white">System Status</h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-300 text-sm">Active Agents</span>
          <span className="text-white font-medium">{agents.length}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300 text-sm">Network Health</span>
          <span className="text-green-400 font-medium">
            {(systemMetrics.networkHealth * 100).toFixed(1)}%
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300 text-sm">Latency</span>
          <span className="text-blue-400 font-medium">{systemMetrics.latency}ms</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300 text-sm">Ethical Score</span>
          <span className="text-purple-400 font-medium">
            {(systemMetrics.ethicalCompliance * 100).toFixed(1)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const Dashboard: React.FC = () => {
  const { selectedView, setView, triggerEvolution } = useEvosStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderCurrentView = () => {
    switch (selectedView) {
      case 'dashboard':
        return <DaedalusConsciousness />;
      case 'neural':
        return <NeuralSubstrateLayer />;
      case 'mesh':
        return <EchoNodeMesh />;
      case 'sigma':
        return <SigmaMatrixEngine />;
      default:
        return <DaedalusConsciousness />;
    }
  };

  return (
    <div className="h-screen w-screen bg-black flex flex-col md:flex-row overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
            <Brain className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Synth3sis</h1>
            <p className="text-xs text-gray-400">Cognitive Intelligence</p>
          </div>
        </div>
        
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg glass hover:bg-white/20 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-sm p-4 border-b border-white/10"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-2 gap-3 mt-16">
                {navigationItems.map((item) => (
                  <MobileNavButton
                    key={item.id}
                    item={item}
                    isActive={selectedView === item.id}
                    onClick={() => {
                      setView(item.id);
                      setMobileMenuOpen(false);
                    }}
                  />
                ))}
              </div>
              
              <div className="mt-6">
                <SystemMetrics />
              </div>
              
              <motion.button
                onClick={() => {
                  triggerEvolution();
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium"
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-4 h-4" />
                <span>Trigger Evolution</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.div 
        className="hidden md:flex flex-col w-80 bg-black/30 backdrop-blur-sm border-r border-white/10 p-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Synth3sis</h1>
            <p className="text-sm text-gray-400">Cognitive Intelligence</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-3 mb-8">
          {navigationItems.map((item) => (
            <DesktopNavButton
              key={item.id}
              item={item}
              isActive={selectedView === item.id}
              onClick={() => setView(item.id)}
            />
          ))}
        </nav>

        {/* System Metrics */}
        <div className="mb-6">
          <SystemMetrics />
        </div>

        {/* Evolution Trigger */}
        <motion.button
          onClick={triggerEvolution}
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Zap className="w-4 h-4" />
          <span>Trigger Evolution</span>
        </motion.button>

        {/* Powered by branding */}
        <div className="mt-auto pt-6 border-t border-white/10">
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Powered by</div>
            <div className="text-or4cl3-primary font-semibold text-sm">Or4cl3 AI Solutions</div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedView}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-white/10 p-2">
        <div className="flex justify-around">
          {navigationItems.map((item) => (
            <MobileNavButton
              key={item.id}
              item={item}
              isActive={selectedView === item.id}
              onClick={() => setView(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Bolt.new badge */}
      <motion.a
        href="https://bolt.new/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 z-40 glass rounded-full p-2 hover:bg-white/20 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <img 
          src="https://bolt.new/logo.png" 
          alt="Built with Bolt.new" 
          className="w-6 h-6"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = '<div class="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">B</div>';
          }}
        />
      </motion.a>
    </div>
  );
};