import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

export function GridBackgroundDemo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Calculate which section (6x4 grid = 24 sections)
      const rect = document.getElementById('grid-container')?.getBoundingClientRect();
      if (rect) {
        const relativeX = e.clientX - rect.left;
        const relativeY = e.clientY - rect.top;
        const sectionWidth = rect.width / 6;
        const sectionHeight = rect.height / 4;
        const col = Math.floor(relativeX / sectionWidth);
        const row = Math.floor(relativeY / sectionHeight);
        const section = row * 6 + col;
        setHoveredSection(section >= 0 && section < 24 ? section : null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getGridColor = () => {
    return '#3b82f6'; // Single blue color for all grid lines
  };

  return (
    <div 
      id="grid-container"
      className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black overflow-hidden"
    >
      {/* Generate 24 grid sections (6x4) */}
      {Array.from({ length: 24 }).map((_, index) => {
        const row = Math.floor(index / 6);
        const col = index % 6;
        const isHovered = hoveredSection === index;
        const gridColor = isHovered ? getGridColor() : '#e4e4e7';
        
        return (
          <div
            key={index}
            className="absolute transition-all duration-300 ease-out"
            style={{
              left: `${(col / 6) * 100}%`,
              top: `${(row / 4) * 100}%`,
              width: `${100 / 6}%`,
              height: `${100 / 4}%`,
              backgroundSize: '40px 40px',
              borderRadius: '100px',
              backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
              opacity: isHovered ? 1 : 0,
              display: isHovered ? 'block' : 'none',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              
            }}
            data-section={index}
          />
        );
      })}
     
    </div>
  );
}
