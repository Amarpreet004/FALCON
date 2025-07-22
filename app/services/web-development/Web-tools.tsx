"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Layers, Database, Code, Palette } from "lucide-react";

interface ToolCard {
  name: string;
  description: string;
  image: string;
  category: string;
  color: string;
  icon: React.ReactNode;
}

  const webDevTools: ToolCard[] = [
  {
    name: "Next.js",
    description: "The React framework for production",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0_yhGEmhIF8QjL7poBJqowjSlIw0kKKOJA&s",
    category: "Framework",
    color: "from-gray-600 to-black",
    icon: <Layers className="w-4 h-4" />
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    image: "https://images.seeklogo.com/logo-png/43/2/tailwind-css-logo-png_seeklogo-434090.png",
    category: "Styling",
    color: "from-gray-400 to-gray-600",
    icon: <Palette className="w-4 h-4" />
  },
  {
    name: "React.js",
    description: "JavaScript library for building UIs",
    image: "https://images.seeklogo.com/logo-png/48/1/react-logo-png_seeklogo-480571.png",
    category: "Framework",
    color: "from-white to-gray-400",
    icon: <Code className="w-4 h-4" />
  },
  {
    name: "Bootstrap",
    description: "Popular CSS framework",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024",
    category: "Framework",
    color: "from-gray-500 to-gray-700",
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    name: "Javascript",
    description: "Dynamic programming language",
    image: "https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    category: "Language",
    color: "from-gray-300 to-gray-500",
    icon: <Zap className="w-4 h-4" />
  },
  {
    name: "MongoDB",
    description: "NoSQL database solution",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChJIoeZ5_EvvIHB3P8aWGTQp3WufGdm5QCQ&s",
    category: "Database",
    color: "from-gray-600 to-black",
    icon: <Database className="w-4 h-4" />
  },
  {
    name: "Express.js",
    description: "Fast Node.js web framework",
    image: "https://www.manektech.com/storage/developer/1646733543.webp",
    category: "Backend",
    color: "from-gray-700 to-gray-900",
    icon: <Layers className="w-4 h-4" />
  },
  {
    name: "Node.js",
    description: "JavaScript runtime environment",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    category: "Runtime",
    color: "from-gray-500 to-gray-800",
    icon: <Code className="w-4 h-4" />
  },
];const ToolCard: React.FC<{ tool: ToolCard; index: number }> = ({ tool, index }) => {
  return (
    <motion.div 
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.05 }}
    >
      <div className="relative bg-slate-800/90 backdrop-blur-md rounded-2xl border border-white/10 p-6 overflow-hidden h-full">
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Glowing border effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
        
        <div className="relative z-10 flex flex-col items-center text-center h-full">
          {/* Icon container */}
          <motion.div 
            className={`relative w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img 
              src={tool.image} 
              alt={tool.name} 
              className="w-10 h-10 object-contain filter brightness-110" 
            />
            
            {/* Floating particles */}
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-white/60 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          </motion.div>

          {/* Content */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {tool.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-3">
            {tool.icon}
            <span className="text-sm text-gray-400 font-medium">{tool.category}</span>
          </div>
          
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
            {tool.description}
          </p>

          {/* Hover effect line */}
          <motion.div
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${tool.color} w-0 group-hover:w-full transition-all duration-500`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function WebDevToolsCards() {
  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-gray-900/20 to-slate-900 py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-600/20 to-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-white/20 to-gray-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            Cutting-Edge Technology Stack
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Modern Development</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Tools</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Powerful technologies and frameworks we use to build exceptional,
            scalable, and future-ready web experiences
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {webDevTools.map((tool, index) => (
            <ToolCard key={index} tool={tool} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-cyan-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Start Your Project Today
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
