import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LandingPage } from './components/LandingPage';
import { LoadingScreen } from './components/LoadingScreen';
import { Dashboard } from './components/Dashboard';
import { useEvosStore } from './store/evosStore';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'landing' | 'loading' | 'dashboard'>('landing');
  const { isInitialized, initializeSystem } = useEvosStore();

  const handleEnterPlatform = () => {
    setCurrentScreen('loading');
    initializeSystem();
    
    // Simulate initialization time
    setTimeout(() => {
      setCurrentScreen('dashboard');
    }, 3000);
  };

  return (
    <div className="h-screen w-screen bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {currentScreen === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <LandingPage onEnter={handleEnterPlatform} />
          </motion.div>
        )}
        
        {currentScreen === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <LoadingScreen />
          </motion.div>
        )}
        
        {currentScreen === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full"
          >
            <Dashboard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}