"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Layers, Zap, Globe, Smartphone, Server, ArrowRight, CheckCircle, Star } from "lucide-react";

interface WebService {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  color: string;
  gradient: string;
  features: string[];
}

const WebDevelopmentServices: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const webServices: WebService[] = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Creating stunning, responsive user interfaces that engage and convert visitors with modern frameworks and best practices. Our frontend solutions prioritize performance, accessibility, and pixel-perfect design across all devices.",
      icon: Code2,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
      color: "text-gray-300",
      gradient: "from-gray-500 to-white",
      features: ["Responsive Design", "Performance Optimization", "Cross-browser Support", "Accessibility"]
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Building robust server-side solutions with scalable architecture, secure APIs, and efficient database management. We engineer backend systems that handle high traffic while maintaining security and performance standards.",
      icon: Server,
      technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"],
      color: "text-gray-400",
      gradient: "from-gray-600 to-gray-300",
      features: ["Scalable Architecture", "API Development", "Database Design", "Security Implementation"]
    },
    {
      id: 3,
      title: "Full-Stack Solutions",
      description: "End-to-end web applications from concept to deployment, seamlessly integrating frontend and backend technologies. Our full-stack approach ensures cohesive architecture and optimized performance across all layers.",
      icon: Layers,
      technologies: ["MERN Stack", "JAMstack", "Serverless", "GraphQL", "REST APIs", "Microservices"],
      color: "text-white",
      gradient: "from-white to-gray-400",
      features: ["End-to-End Development", "System Integration", "DevOps Setup", "Deployment Automation"]
    },
    {
      id: 4,
      title: "E-commerce Platforms",
      description: "Custom online stores with secure payment integration, inventory management, and optimized shopping experiences. We build e-commerce solutions that convert visitors into loyal customers with smooth checkout flows.",
      icon: Globe,
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Magento", "Custom Solutions"],
      color: "text-gray-200",
      gradient: "from-gray-700 to-black",
      features: ["Payment Integration", "Inventory Management", "Shopping Cart", "Order Processing"]
    },
    {
      id: 5,
      title: "Progressive Web Apps",
      description: "App-like experiences on the web with offline functionality, push notifications, and native mobile performance. Our PWAs deliver engagement rates comparable to native apps with the reach of the web.",
      icon: Smartphone,
      technologies: ["PWA", "Service Workers", "Web Push", "IndexedDB", "Workbox", "Manifest"],
      color: "text-gray-100",
      gradient: "from-gray-400 to-gray-600",
      features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-platform"]
    },
    {
      id: 6,
      title: "Performance Optimization",
      description: "Lightning-fast websites with optimized loading, SEO improvements, and enhanced UX through technical excellence. We analyze and optimize every aspect of your site to maximize conversion rates.",
      icon: Zap,
      technologies: ["Core Web Vitals", "Lighthouse", "Webpack", "CDN", "Image Optimization", "Lazy Loading"],
      color: "text-gray-300",
      gradient: "from-gray-600 to-gray-800",
      features: ["Speed Optimization", "SEO Enhancement", "Core Web Vitals", "Performance Monitoring"]
    }
  ];

  const activeServiceData = webServices.find(service => service.id === activeService);

  if (!isClient) {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 via-gray-900/20 to-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse text-gray-400">Loading services...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 via-gray-900/20 to-slate-900 min-h-screen overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-gray-600/20 to-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-white/20 to-gray-600/20 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-500/10 to-white/10 border border-gray-500/20 rounded-full text-gray-300 text-sm font-medium backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-4 h-4" />
            Professional Web Development Services
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Services We</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Offer</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We build digital experiences that combine cutting-edge technology
            with exceptional design and performance
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Service Navigation */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="lg:sticky lg:top-8">
              <h3 className="text-2xl font-bold text-white mb-8 hidden lg:block">Our Specializations</h3>
              <div className="flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 lg:overflow-visible">
                {webServices.map((service, index) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 min-w-max lg:min-w-0 backdrop-blur-md border ${
                      activeService === service.id
                        ? `bg-slate-800/90 border-white/20 shadow-lg shadow-white/10`
                        : 'bg-slate-800/50 hover:bg-slate-800/70 border-white/10 hover:border-white/20'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <motion.div 
                      className={`relative p-3 rounded-xl ${activeService === service.id ? `bg-gradient-to-r ${service.gradient}` : 'bg-slate-700/50'}`}
                      whileHover={{ rotate: 5 }}
                    >
                      <service.icon className={`w-6 h-6 ${activeService === service.id ? 'text-white' : service.color}`} />
                    </motion.div>
                    <div className="relative text-left">
                      <h4 className={`font-semibold ${activeService === service.id ? 'text-white' : 'text-gray-300'}`}>
                        {service.title}
                      </h4>
                    </div>
                    
                    {activeService === service.id && (
                      <motion.div
                        className="absolute right-4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Service Details */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {activeServiceData && (
                <motion.div
                  key={activeServiceData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Glowing background */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${activeServiceData.gradient} opacity-10 blur-2xl rounded-3xl`}></div>
                  
                  <div className="relative bg-slate-800/90 backdrop-blur-md rounded-3xl border border-white/10 p-8 shadow-2xl">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                      <motion.div 
                        className={`p-6 rounded-2xl bg-gradient-to-r ${activeServiceData.gradient} shadow-lg`}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <activeServiceData.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{activeServiceData.title}</h3>
                        <div className={`h-1 w-24 rounded-full bg-gradient-to-r ${activeServiceData.gradient}`} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">{activeServiceData.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-white" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeServiceData.features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg border border-slate-600/50"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeServiceData.gradient}`}></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Database className="w-5 h-5 text-gray-300" />
                        Technologies We Use
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {activeServiceData.technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            className="px-4 py-2 rounded-full text-sm font-medium bg-slate-700/70 backdrop-blur-sm text-gray-300 border border-slate-600/50 hover:border-white/20 transition-colors duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-600/50 gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Star className="w-4 h-4 text-white" />
                        <span>Enterprise-grade solutions</span>
                      </div>
                      
                      <motion.button
                        className={`group px-6 py-3 bg-gradient-to-r ${activeServiceData.gradient} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center gap-2">
                          Get Started
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentServices;
