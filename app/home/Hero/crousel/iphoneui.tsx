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
    <div
      style={{
        width: "320px",
        height: "650px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 320 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", position: "absolute", zIndex: 1 }}
      >
        {/* Outer iPhone border */}
        <rect
          x="10"
          y="10"
          width="300"
          height="630"
          rx="60"
          stroke="#000"
          strokeWidth="10"
          fill="white"
        />
        {/* Notch */}
        <rect
          x="120"
          y="40"
          width="80"
          height="30"
          rx="15"
          fill="#000"
        />
        {/* Top bar with logo and button */}
        <foreignObject x="25" y="20" width="270" height="40">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%' }}>
            {/* Logo on left */}
            <img src="/FALCONLOGO.png" alt="Logo" style={{ height: 28, width: 'auto', objectFit: 'contain' }} />
            {/* Get in Touch button on right */}
            <button style={{ background: '#5C0632', color: 'white', borderRadius: 16, padding: '6px 16px', fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer',marginTop: '1.5rem' }}>
              Get in Touch
            </button>
          </div>
        </foreignObject>
        {/* Carousel inside the screen */}
        <foreignObject x="25" y="60" width="270" height="520">
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <InfiniteMovingCardsDemo />
          </div>
        </foreignObject>
        {/* Mobile navbar at the bottom as image */}
        <foreignObject x="25" y="590" width="270" height="50">
          <div style={{ width: '100%', height: '100%' }}>
            <img src="/heronav.png" alt="Mobile Navbar" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default IphoneUI;
