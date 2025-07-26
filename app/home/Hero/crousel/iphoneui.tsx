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
        {/* Status bar (time, wifi, battery) */}
        <foreignObject x="25" y="24" width="270" height="24">
          <div style={{
            width: '100%',
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif',
            fontSize: 15,
            color: '#222',
            fontWeight: 600,
            letterSpacing: 0.2,
            padding: '0 8px',
            background: 'transparent',
            userSelect: 'none',
          }}>
            {/* Time */}
            <span suppressHydrationWarning>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            {/* WiFi and Battery icons */}
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {/* WiFi icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.5 8.5C7.5 5.5 12.5 5.5 16.5 8.5" stroke="#222" strokeWidth="1.2" strokeLinecap="round"/><path d="M6.5 11.5C9 9.5 11 9.5 13.5 11.5" stroke="#222" strokeWidth="1.2" strokeLinecap="round"/><path d="M9.5 14.5C10.3 14.5 11.1 14.5 11.5 14.5" stroke="#222" strokeWidth="1.2" strokeLinecap="round"/></svg>
              {/* Battery icon */}
              <svg width="26" height="14" viewBox="0 0 26 14" fill="none"><rect x="1" y="2" width="20" height="10" rx="3" stroke="#222" strokeWidth="1.2" fill="#fff"/><rect x="3" y="4" width="16" height="6" rx="2" fill="#7ED957"/><rect x="22" y="5.5" width="2" height="3" rx="1" fill="#222"/></svg>
            </span>
          </div>
        </foreignObject>

        {/* Real website inside the phone screen, scaled to mobile viewport */}
        <foreignObject x="25" y="48" width="270" height="582">
          <div
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: 32,
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              background: '#fff',
              WebkitOverflowScrolling: 'touch',
              position: 'relative',
              touchAction: 'manipulation',
            }}
          >
            <iframe
              src="/"
              title="Website Preview"
              width={375}
              height={750}
              style={{
                width: 375,
              height: 810,
                border: 'none',
                transform: 'scale(0.72)',
                transformOrigin: 'top left',
                background: '#fff',
                pointerEvents: 'auto',
                overflow: 'auto',
                borderRadius: 0,
                display: 'block',
              }}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              scrolling="yes"
            />
          </div>
        </foreignObject>
        {/* Notch - moved after content to appear in front */}
        <rect
          x="120"
          y="24"
          width="80"
          height="30"
          rx="15"
          fill="#000"   
        />
        {/* Mobile navbar at the bottom as image */}
        
      </svg>
    </div>
  );
};

export default IphoneUI;
