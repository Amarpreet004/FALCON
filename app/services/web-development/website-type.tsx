"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  User, 
  Building, 
  BookOpen, 
  Camera, 
  TrendingUp, 
  Users, 
  Globe, 
  Heart, 
  Gamepad2, 
  Briefcase, 
  Newspaper,
  Zap,
  Star,
  ArrowUpRight
} from 'lucide-react';

interface WebsiteType {
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  color: string;
  complexity: 'Simple' | 'Medium' | 'Complex';
  features: string[];
  timeline: string;
}

const websiteTypes: WebsiteType[] = [
  {
    name: "E-commerce Store",
    description: "Full-featured online store with payment processing, inventory management, and customer accounts for seamless shopping experiences",
    icon: <ShoppingCart className="w-7 h-7" />,
    category: "Business",
    color: "from-gray-500 to-white",
    complexity: "Complex",
    features: ["Payment Gateway", "Inventory Management", "User Accounts", "Order Tracking"],
    timeline: "8-12 weeks"
  },
  {
    name: "Portfolio Website",
    description: "Personal showcase for designers, developers, and artists to display their work and attract potential clients",
    icon: <User className="w-7 h-7" />,
    category: "Personal",
    color: "from-white to-gray-600",
    complexity: "Simple",
    features: ["Project Gallery", "Contact Forms", "Resume Section", "Blog Integration"],
    timeline: "2-4 weeks"
  },
  {
    name: "Corporate Website",
    description: "Professional online presence for companies with service descriptions, team profiles, and comprehensive contact information",
    icon: <Building className="w-7 h-7" />,
    category: "Business",
    color: "from-gray-400 to-gray-700",
    complexity: "Medium",
    features: ["Team Profiles", "Service Pages", "Contact Forms", "Company Blog"],
    timeline: "4-6 weeks"
  },
  {
    name: "Online Learning Platform",
    description: "E-learning site with course content, student dashboards, progress tracking, and interactive quizzes",
    icon: <BookOpen className="w-7 h-7" />,
    category: "Education",
    color: "from-gray-600 to-black",
    complexity: "Complex",
    features: ["Course Management", "Progress Tracking", "Interactive Quizzes", "Student Dashboard"],
    timeline: "10-16 weeks"
  },
  {
    name: "Startup Landing Page",
    description: "High-converting landing page for startups to showcase value propositions and capture qualified leads",
    icon: <TrendingUp className="w-7 h-7" />,
    category: "Startup",
    color: "from-gray-300 to-gray-600",
    complexity: "Simple",
    features: ["Lead Capture", "A/B Testing", "Analytics", "CTA Optimization"],
    timeline: "1-3 weeks"
  },
  {
    name: "Social Platform",
    description: "Community platform with user profiles, messaging systems, and intelligent matching algorithms",
    icon: <Heart className="w-7 h-7" />,
    category: "Social",
    color: "from-gray-700 to-black",
    complexity: "Complex",
    features: ["User Profiles", "Messaging System", "Matching Algorithm", "Community Features"],
    timeline: "12-20 weeks"
  },
];

const WebsiteTypeCard: React.FC<{ websiteType: WebsiteType; index: number }> = ({ websiteType, index }) => {
  const complexityConfig = {
    Simple: { color: "text-white", bg: "bg-gray-500/20", border: "border-gray-500/30" },
    Medium: { color: "text-gray-200", bg: "bg-gray-600/20", border: "border-gray-600/30" },
    Complex: { color: "text-gray-300", bg: "bg-gray-700/20", border: "border-gray-700/30" }
  };

  const config = complexityConfig[websiteType.complexity];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      <div className="relative bg-slate-800/90 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden h-full">
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${websiteType.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        {/* Glowing border effect */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${websiteType.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

        {/* Header with floating icon */}
        <div className="relative p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className={`relative p-4 bg-gradient-to-br ${websiteType.color} rounded-2xl shadow-lg`}
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {websiteType.icon}
              
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

            <div className="flex flex-col items-end gap-2">
              <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                {websiteType.category}
              </span>
              <div className={`flex items-center gap-1 px-3 py-1 ${config.bg} ${config.border} border rounded-full`}>
                <Star className={`w-3 h-3 ${config.color}`} />
                <span className={`text-xs font-medium ${config.color}`}>
                  {websiteType.complexity}
                </span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {websiteType.name}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {websiteType.description}
          </p>
        </div>

        {/* Features section */}
        <div className="px-6 pb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            Key Features
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {websiteType.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                className="text-xs text-gray-400 bg-slate-700/50 px-3 py-2 rounded-lg border border-slate-600/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-xs">Timeline: {websiteType.timeline}</span>
            </div>
            
            <motion.button
              className="group/btn p-2 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 rounded-lg hover:from-cyan-500/20 hover:to-purple-600/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>

        {/* Hover effect line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${websiteType.color} w-0 group-hover:w-full transition-all duration-500`}
        />
      </div>
    </motion.div>
  );
};

export default function WebsiteTypesCards() {
  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Globe className="w-4 h-4" />
            Diverse Project Portfolio
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Website Types We</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Develop</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From bold and artistic to sleek and professional — we build websites 
            that perfectly match your vision and business goals
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteTypes.map((websiteType, index) => (
            <WebsiteTypeCard key={index} websiteType={websiteType} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-gray-400 mb-6">Ready to start your project?</p>
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-cyan-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              <Building className="w-5 h-5" />
              Discuss Your Project
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}