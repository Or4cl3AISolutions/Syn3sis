import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network, Shield, Zap, Eye } from 'lucide-react';

const loadingSteps = [
  { icon: Brain, label: 'Initializing Daedalus Consciousness', duration: 800 },
  { icon: Network, label: 'Activating Neural Substrate Layer', duration: 600 },
  { icon: Shield, label: 'Calibrating Σ-Matrix Engine', duration: 700 },
  { icon: Zap, label: 'Synchronizing EchoNode Mesh', duration: 500 },
  { icon: Eye, label: 'Establishing Cognitive Coherence', duration: 400 },
];

export const LoadingScreen: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let stepTimer: NodeJS.Timeout;
    let progressTimer: NodeJS.Timeout;

    const runStep = (stepIndex: number) => {
      if (stepIndex >= loadingSteps.length) return;

      const step = loadingSteps[stepIndex];
      const stepProgress = (stepIndex / loadingSteps.length) * 100;
      
      setCurrentStep(stepIndex);
      
      // Animate progress for this step
      const progressIncrement = (100 / loadingSteps.length) / (step.duration / 50);
      let currentProgress = stepProgress;
      
      progressTimer = setInterval(() => {
        currentProgress += progressIncrement;
        setProgress(Math.min(currentProgress, (stepIndex + 1) * (100 / loadingSteps.length)));
      }, 50);

      stepTimer = setTimeout(() => {
        clearInterval(progressTimer);
        runStep(stepIndex + 1);
      }, step.duration);
    };

    runStep(0);

    return () => {
      clearTimeout(stepTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-black via-purple-900/20 to-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4 animate-pulse-glow">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold gradient-text-purple">Synth3sis</h1>
          <p className="text-gray-400 text-sm mt-2">Unified Cognitive Intelligence</p>
        </motion.div>

        {/* Current step */}
        <motion.div
          key={currentStep}
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            {React.createElement(loadingSteps[currentStep]?.icon || Brain, {
              className: "w-6 h-6 text-purple-400 animate-pulse"
            })}
            <span className="text-white font-medium">
              {loadingSteps[currentStep]?.label || 'Initializing...'}
            </span>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-gray-400 text-sm">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* System status indicators */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          {loadingSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex items-center space-x-2 p-2 rounded-lg glass ${
                index <= currentStep ? 'text-green-400' : 'text-gray-500'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {React.createElement(step.icon, {
                className: `w-4 h-4 ${index <= currentStep ? 'text-green-400' : 'text-gray-500'}`
              })}
              <span className="truncate">{step.label.split(' ')[0]}</span>
              {index <= currentStep && (
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Powered by branding */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="text-xs text-gray-500 mb-1">Powered by</div>
          <div className="text-or4cl3-primary font-semibold text-sm">Or4cl3 AI Solutions</div>
        </motion.div>
      </div>

      {/* Loading spinner overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="w-96 h-96 border border-purple-500/20 rounded-full animate-spin-slow" />
        <div className="absolute w-80 h-80 border border-cyan-500/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        <div className="absolute w-64 h-64 border border-pink-500/20 rounded-full animate-spin-slow" />
      </motion.div>
    </div>
  );
};