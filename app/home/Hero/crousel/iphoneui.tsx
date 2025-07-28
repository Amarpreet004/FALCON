"use client";

import React, { useEffect, useState } from "react";


/**
 * Optimized iPhone UI outline using SVG for sharpness and scalability.
 */
const IphoneFrame: React.FC = () => (
  <div className="relative w-full max-w-xs aspect-[320/650] flex items-center justify-center" style={{ minHeight: 400, maxHeight: 520 }}>
    {/* iPhone outline with transparent screen */}
    <div className="absolute inset-0 z-10 pointer-events-none" style={{ borderRadius: 60, border: '8px solid #000', background: 'transparent', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
    {/* Status bar: time, wifi, battery, with white background */}
    <div
      className="absolute z-9 flex items-center justify-between"
      style={{ top: 8, left: '50%', right: 'auto', height: 30, width: '93%', background: 'white', borderTopLeftRadius: 52, borderTopRightRadius: 52, boxSizing: 'border-box', paddingLeft: 24, paddingRight: 24, transform: 'translateX(-50%)' }}
    >
      {/* Time (left) */}
      <span className="text-xs font-semibold text-[#5C0632]" style={{ letterSpacing: 1 }}>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      {/* WiFi and Battery (right) */}
      <div className="flex items-center gap-2">
        {/* WiFi icon */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#5C0632]" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.93 7.36a12.07 12.07 0 0114.14 0" stroke="#5C0632" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M5.47 10.02a8.07 8.07 0 019.06 0" stroke="#5C0632" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8.01 12.68a4.07 4.07 0 013.98 0" stroke="#5C0632" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="10" cy="16" r="1" fill="#5C0632" />
        </svg>
        {/* Battery icon */}
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-[#5C0632]" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="2" width="20" height="8" rx="2" fill="#222" stroke="#5C0632" strokeWidth="1.5"/>
          <rect x="3" y="4" width="16" height="4" rx="1" fill="#4ade80" />
          <rect x="21" y="4" width="2" height="4" rx="1" fill="#5C0632" />
        </svg>
      </div>
    </div>
    {/* Notch */}
    <svg
      className="absolute z-40"
      style={{ left: '50%', top: 24, transform: 'translateX(-50%)' }}
      width={80}
      height={30}
      viewBox="0 0 80 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="80" height="30" rx="15" fill="#000" />
    </svg>
    {/* Website preview fills the phone screen, starts below notch/status bar */}
    <div className="absolute z-0 w-full h-full" style={{ borderRadius: 60, overflow: 'hidden', top: 0, left: 0, paddingTop: 37 }}>
      <iframe
        src="https://www.falconwebsolution.com"
        title="Falcon Web Solution"
        className="w-full h-full min-h-[420px]"
        style={{ border: "none", borderRadius: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        loading="lazy"
      />
    </div>
  </div>
);

const IphoneUI: React.FC = () => {
  // Hide on mobile screens by rendering null, avoid hydration mismatch
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkMobile = () => setShow(window.innerWidth > 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!show) return null;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent py-4 px-2">
      <div className="flex items-center justify-center w-full">
        <IphoneFrame />
      </div>
    </div>
  );
}
export default IphoneUI;
