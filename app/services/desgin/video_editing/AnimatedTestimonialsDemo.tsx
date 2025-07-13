"use client";
import * as React from "react";
import { useState } from "react";
import { AnimatedTestimonials } from "./animated-testimonials";
import { useRouter } from 'next/navigation';
import Cards from "../explore/exploreservises";

export function AnimatedTestimonialsDemo() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetServicesClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://videos.pexels.com/video-files/4098617/4098617-uhd_2560_1440_30fps.mp4",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_30fps.mp4",
    },
  ];
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold custom-class text-center mt-5" >
        Video Editing
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
      
      {/* Call to Action Button */}
      <div className="flex justify-center mt-12 mb-8">
        <button 
          onClick={handleGetServicesClick}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group hover:scale-110 transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-gray-500/25"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E5E7EB_0%,#9CA3AF_50%,#E5E7EB_100%)] group-hover:animate-[spin_1s_linear_infinite]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition-all duration-300 group-hover:text-gray-100 group-hover:font-semibold">
            Explore All Services
          </span>
        </button>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-6xl max-h-[90vh] w-full mx-4 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              <div className="text-center p-8 pb-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Explore All Our Services
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Discover our comprehensive range of digital services and find the perfect solution for your needs
                </p>
              </div>
              
              {/* Services Cards */}
              <Cards />

              {/* Additional CTA */}
              <div className="p-8 pt-4 text-center">
                <button 
                  onClick={closeModal}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
