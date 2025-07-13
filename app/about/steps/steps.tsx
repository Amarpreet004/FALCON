"use client"

import React from 'react';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Understand & Plan",
      description: "We begin by understanding your business goals, challenges, and requirements. Based on this, we create a tailored roadmap to guide the entire project.",
      image: "https://img.freepik.com/premium-photo/plan-word-business-planning-concept_361816-7824.jpg",
      color: "bg-primary",
      accentColor: "primary"
    },
    {
      id: 2,
      title: "Design & Prototype",
      description: "Our UI/UX experts design intuitive and engaging interfaces while our developers build interactive prototypes to validate the user journey.",
      image: "https://img.freepik.com/premium-photo/ux-ui-design-concept-creative-website-development_31965-66786.jpg",
      color: "bg-primary",
      accentColor: "primary"
    },
    {
      id: 3,
      title: "Develop & Test",
      description: "We build your solution using modern technologies, applying rigorous testing to ensure performance, security, and scalability.",
      image: "https://img.freepik.com/premium-photo/software-testing-automation-concept_31965-66787.jpg",
      color: "bg-primary",
      accentColor: "primary"
    },
    {
      id: 4,
      title: "Deploy & Support",
      description: "We launch your product with precision and provide continuous monitoring, updates, and support to ensure long-term success.",
      image: "https://img.freepik.com/premium-photo/rocket-launch-creative-startup-concept_31965-66788.jpg",
      color: "bg-primary",
      accentColor: "primary"
    }
  ];

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            We break down complex ideas into clear, actionable steps that deliver measurable outcomes.
          </p>
        </motion.div>

        {/* Enhanced Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative group"
              whileHover={{ scale: 1.03 }}
            >
              {/* Connection Line - Only visible on lg+ screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-1.5 bg-border z-0">
                  <div className={`w-full h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              )}
              
              {/* Enhanced Card */}
              <div className={`relative h-full bg-card rounded-xl p-6 pt-12 border border-border shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-primary/40 overflow-hidden`}>
                {/* Step Number - Now fully visible with adjusted positioning */}
                <div className={`absolute top-7 left-6 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-xl ${step.color} text-primary-foreground font-bold text-lg mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg z-10`}>
                  {step.id}
                </div>
                
                {/* Image */}
                <div className="mb-6 group-hover:scale-105 transition-transform duration-500 flex justify-center">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-md border-2 border-border">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 clip-corner`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(15px) rotate(-3deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.05);
          }
        }

        .clip-corner {
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;