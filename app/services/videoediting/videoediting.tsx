"use client";
import React, { useState } from "react";

const TABS = [
  { label: "YouTube Videos" },
  { label: "SaaS Videos" },
  { label: "Shorts" },
  { label: "Ad Creatives & VSL" },
];

// (removed old VIDEOS array, only new one below)
const VIDEOS = [
  [
    {
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwOjuiwxVPfLxzcYNR8bWB7AXmHo541u0nMpwV",
    },
    {
      video: "https://www.w3schools.com/html/movie.mp4",
      poster: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    },
    {
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    },
    {
      video: "https://www.w3schools.com/html/movie.mp4",
      poster: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    },
  ],
  // Add more arrays for other tabs if needed
];

export default function VideoEditingGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const videos = VIDEOS[activeTab] || VIDEOS[0];

  return (
    <section className="w-full min-h-[80vh] bg-white py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#660033] mb-8 text-center">Our Latest Work</h2>
      {/* Tabs */}
      <div className="flex gap-4 mb-10 flex-wrap justify-center">
        {TABS.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            className={`px-5 py-2 rounded-lg font-medium transition-all border-2 ${activeTab === idx ? 'border-[#660033] bg-[#660033] text-white shadow-lg' : 'border-[#660033] text-[#660033] bg-transparent hover:bg-[#660033]/10'} focus:outline-none`}
            style={{ minWidth: 140 }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className={`relative rounded-xl overflow-hidden border-2 border-[#660033] group shadow-lg transition-all duration-300 bg-[#660033]/10`}
            style={{ aspectRatio: '16/9' }}
          >
            <video
              src={video.video}
              poster={video.poster}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-[#660033]">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="19" cy="19" r="19" fill="#660033" fillOpacity="0.95" />
                  <polygon points="15,12 28,19 15,26" fill="#fff" />
                </svg>
              </span>
            </div>
            {/* Animated Border Glow */}
            <div className={`absolute inset-0 rounded-xl pointer-events-none group-hover:shadow-[0_0_0_4px_rgba(102,0,51,0.15)] transition-all duration-300`} />
          </div>
        ))}
      </div>
    </section>
  );
}