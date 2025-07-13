"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNavigateToVideoEditing = () => {
    router.push("/services/videoediting");
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="w-full px-4 py-20 font-sans antialiased md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 p-8 shadow-2xl"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
              {/* Video Section */}
              <div className="relative">
                <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-xl">
                  <video
                    src={testimonials[active].src}
                    width={500}
                    height={500}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover object-center cursor-pointer"
                    onClick={handleNavigateToVideoEditing}
                  />
                  {/* Play button overlay */}
                 
                 
                </div>
              </div>

              {/* Content Section */}
              <div className="text-white space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    {testimonials[active].name.split(' ')[0]} from{' '}
                    <span className="text-yellow-300">
                      {testimonials[active].designation.split(' ').slice(-1)[0]}
                    </span>{' '}
                    talks about how
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-semibold text-blue-100">
                    Video Editing can help you build awesome content with speed
                  </h3>
                </motion.div>

                <motion.p 
                  className="text-lg md:text-xl text-blue-100 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {testimonials[active].quote}
                </motion.p>

                <motion.div 
                  className="flex items-center space-x-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">{testimonials[active].name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{testimonials[active].name}</p>
                    <p className="text-blue-200 text-sm">{testimonials[active].designation}</p>
                  </div>
                </motion.div>

                {/* Action Button */}
                <motion.button
                  onClick={handleNavigateToVideoEditing}
                  className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Video Services
                </motion.button>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-6 right-6 flex gap-3">
              <button
                onClick={handlePrev}
                className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300"
              >
                <IconArrowLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:-translate-x-1" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300"
              >
                <IconArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:translate-x-1" />
              </button>
            </div>

            {/* Testimonial Indicators */}
            
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
