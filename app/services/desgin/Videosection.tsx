"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  videoSrc?: string;
  youtubeId?: string;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  videoSrc = "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
  youtubeId = "IQ_xXaaIZlY",
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] w-full flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900 overflow-hidden",
          className,
        )}
        {...props}
      >
        {/* Video Background */}
        {youtubeId ? (
          <iframe
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0`}
            title="Background Video"
            allow="autoplay; encrypted-media"
            style={{ 
              border: 'none',
              transform: 'scale(1.1)', // Slightly scale to hide YouTube UI
              transformOrigin: 'center center'
            }}
          />
        ) : (
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        
        {/* Content */}
        <div className="relative z-20">
          {children}
        </div>
      </div>
    </main>
  );
};
