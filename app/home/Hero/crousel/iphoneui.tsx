"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCardsDemo } from "./crousel";

/**
 * Optimized iPhone UI outline using SVG for sharpness and scalability.
 */
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
        <div className="relative w-full max-w-xs aspect-[320/650] flex items-center justify-center" style={{ minHeight: 500 }}>
          {/* iPhone outline with transparent screen */}
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ borderRadius: 60, border: '8px solid #000', background: 'transparent', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
          {/* Notch */}
          <svg
            className="absolute z-20"
            style={{ left: '50%', top: 24, transform: 'translateX(-50%)' }}
            width={80}
            height={30}
            viewBox="0 0 80 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="0" width="80" height="30" rx="15" fill="#000" />
          </svg>
          {/* Website preview fills the phone screen */}
          <div className="absolute inset-0 z-0" style={{ borderRadius: 60, overflow: 'hidden' }}>
            <iframe
              src="https://www.falconwebsolution.com"
              title="Falcon Web Solution"
              className="w-full h-full min-h-[468px]"
              style={{ border: "none", borderRadius: 60 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IphoneUI;
