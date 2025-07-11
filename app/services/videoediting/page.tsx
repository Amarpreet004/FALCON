'use client';

import React from 'react';

export default function VideoEditingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Video Editing Services
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Transform your raw footage into cinematic brilliance with our expert editing tools and creative vision.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            {
              name: "Adobe Premiere Pro",
              description: "Professional video editing software",
              image: "https://w7.pngwing.com/pngs/517/344/png-transparent-adobe-premiere-pro-premiere-pro-multimedia-software-aplication-app-adobe-family-software-icon.png"
            },
            {
              name: "Adobe After Effects",
              description: "Motion graphics and visual effects",
              image: "https://w7.pngwing.com/pngs/384/735/png-transparent-adobe-after-effects-computer-icons-adobe-creative-cloud-adobe-animate-animation-purple-violet-logo.png"
            },
            {
              name: "Final Cut Pro",
              description: "Professional video editing for Mac",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSvbAoTpB4_kaLqaP2vMACW5ZyXFrZleH0g&s"
            },
            {
              name: "Blender",
              description: "3D modeling and animation",
              image: "https://download.blender.org/branding/community/blender_community_badge_orange.png"
            }
          ].map((tool, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 rounded-full p-4 mb-5 shadow-inner">
                  <img src={tool.image} alt={tool.name} className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                <p className="text-gray-600 mt-2">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Video Editing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Planning & Storyboarding",
                description: "We start by understanding your vision and creating a detailed storyboard."
              },
              {
                step: "2",
                title: "Editing & Effects",
                description: "Our experts edit your footage and add stunning visual effects."
              },
              {
                step: "3",
                title: "Review & Delivery",
                description: "We review the final product with you and deliver in your preferred format."
              }
            ].map((process, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}