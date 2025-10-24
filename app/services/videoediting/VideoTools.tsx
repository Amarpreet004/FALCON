"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" stroke="#fff" strokeWidth="3" opacity="0.7" /><path d="M12 20c2-4 8-8 16-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" /></svg>
    ),
    value: "250%",
    label: "More Engagement",
    desc: "Every video is designed with a clear strategy to keep viewers hooked till the end."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" stroke="#fff" strokeWidth="3" opacity="0.7" /><path d="M10 20c4-8 16-8 20 0" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" /></svg>
    ),
    value: "80%",
    label: "More Reach",
    desc: "Optimized for YouTube, Instagram Reels, TikTok, and all major platforms."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="8" width="24" height="24" rx="6" stroke="#fff" strokeWidth="3" opacity="0.7" /><path d="M16 24h8v-8h-8v8z" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" /></svg>
    ),
    value: "60%",
    label: "More Leads",
    desc: "From raw clips to ready-to-post, marketing-ready edits that drive sales."
  }
];

export default function VideoTools() {
  return (
  <section className="relative w-[96%] mx-auto rounded-3xl min-h-[70vh] bg-[#660033] py-16 px-4 md:px-0 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-0">
        {/* Left: Stats */}
        <div className="flex-1 flex flex-col gap-12 animate-fade-in-left relative">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex items-start gap-6 group">
                <div className="shrink-0">{stat.icon}</div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{stat.value}</span>
                    <span className="text-lg text-white/80 font-medium">{stat.label}</span>
                  </div>
                  <p className="text-white/70 text-base md:text-lg mt-1">{stat.desc}</p>
                </div>
              </div>
              {/* Divider line, aligned with icon */}
              {i < stats.length - 1 && (
                <div className="mt-6 ml-[4.5rem] md:ml-[4.5rem] h-0.5 w-full max-w-[80%] bg-white/30" />
              )}
            </div>
          ))}
        </div>
        {/* Right: Text & CTA */}
        <div className="flex-1 flex flex-col items-center md:items-start animate-fade-in-right">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center md:text-left">We Are Falcon Web Solution</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left leading-snug">Professional Video Editing. Designed to Grow Your Brand.</h3>
          <p className="text-white/90 text-base md:text-lg mb-6 max-w-lg text-center md:text-left">
            At Falcon Web Solution, we craft high-quality, story-driven videos that help brands, creators, and businesses capture attention, boost engagement, and grow faster online.
          </p>
          <p className="text-white/70 text-base md:text-lg mb-8 max-w-lg text-center md:text-left">
            We combine strategy, creativity, and precision editing to deliver videos that not only look amazing — but actually perform. You focus on your business, while we handle the editing magic that turns every clip into a conversion tool.

          </p>
          <button className="px-7 py-3 bg-white text-[#660033] font-semibold rounded-lg shadow-lg hover:bg-white/90 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white">
            Contact us <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-left {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes divider {
          0% { width: 0; opacity: 0; }
          60% { opacity: 1; }
          100% { width: 66.666667%; opacity: 1; }
        }
        .animate-fade-in-left { animation: fade-in-left 1.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-right { animation: fade-in-right 1.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-divider { animation: divider 1.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-divider.delay-200 { animation-delay: 0.2s; }
        .animate-divider.delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}