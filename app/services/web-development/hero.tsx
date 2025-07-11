"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const orbitIcons = [
  {
    id: 1,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    angle: 0,
    name: "HTML5"
  },
  {
    id: 2,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    angle: 72,
    name: "CSS3"
  },
  {
    id: 3,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    angle: 144,
    name: "JavaScript"
  },
  {
    id: 4,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    angle: 216,
    name: "React"
  },
  {
    id: 5,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    angle: 288,
    name: "Node.js"
  },
];

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render orbit icons function to avoid duplication
  const renderOrbitIcons = () => {
    return orbitIcons.map((icon) => {
      const radius = 220;
      const x = radius * Math.cos((icon.angle * Math.PI) / 180);
      const y = radius * Math.sin((icon.angle * Math.PI) / 180);
      return (
        <div
          key={`hero-orbit-${icon.id}-${icon.name}`}
          className="absolute w-10 h-10"
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={icon.image}
            alt={`${icon.name} Icon`}
            className="w-full h-full object-contain"
            title={icon.name}
            loading="lazy"
          />
        </div>
      );
    });
  };

  // Main image component to avoid duplication
  const MainImage = () => (
    <img
      src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwHydJ2lNI50h6VMBPGnsak9oYCxpFQcEr4WLU"
      alt="Digital Experience Illustration"
      className="w-full h-auto object-contain"
      loading="lazy"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
      }}
    />
  );
  return (
    <div className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-x-hidden">
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build. Launch. Grow.
                <br />
                We Create{" "}
                <span className="text-green-500 relative">Digital Experiences.</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                We design and develop responsive, high-performing websites that help your
                business grow and stand out online.
              </p>
            </div>
          </div>

          {/* Right - Orbit UI */}
          <div className="relative flex justify-center items-center">
            {/* Orbit Container */}
            <div className="absolute w-96 h-96 rounded-full border border-dashed border-white/30">
              <div className={`w-full h-full ${isClient ? 'animate-spin' : ''}`} style={{ animationDuration: '20s', animationTimingFunction: 'linear' }}>
                {renderOrbitIcons()}
              </div>
            </div>

            {/* Main Card */}
            <div className="relative w-full max-w-md h-96 flex items-center justify-center z-10">
              <div className={`w-[90%] h-auto transition-transform duration-300 ${isClient ? 'hover:scale-105' : ''}`}>
                <MainImage />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
