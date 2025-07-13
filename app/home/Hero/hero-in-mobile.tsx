"use client";
import { ThreeDMarquee } from "./3d-marquee";
import { cn } from "@/lib/utils";
export function ThreeDMarqueeDemo() {
  const images = [
    "/Global.png",
    "/amartrevel.png",
    "/techleran.png",
    "/uniquesimage.png",
    "/bharattech.png",
    "/amartrevel.png",
    "/uniquesimage.png",
    "/Global.png",
    "/techleran.png",
    "/bharattech.png",
    "/amartrevel.png",
    "/uniquesimage.png",
    "/Global.png",
    "/bharattech.png",
    "/techleran.png",
    "/uniquesimage.png",
    "/bharattech.png",
    "/amartrevel.png",
    "/Global.png",
    "/techleran.png",
    "/bharattech.png",
    "/Global.png",
    "/amartrevel.png",
    "/uniquesimage.png",
    "/techleran.png",
    "/bharattech.png",
    "/Global.png",
    "/amartrevel.png",
    "/uniquesimage.png",
    "/techleran.png",
     "/bharattech.png",
    "/Global.png",
    "/amartrevel.png",
    "/uniquesimage.png",
    "/techleran.png",
    "/techleran.png",
    "/bharattech.png",
    "/Global.png",
    "/amartrevel.png",
    "/uniquesimage.png",
    "/techleran.png",
     "/bharattech.png",
    "/Global.png",
    "/amartrevel.png",
    "/uniquesimage.png",
    "/techleran.png",
  ];
  return (
    <div className="relative mx-auto my-10 max-w-7xl min-h-screen flex items-center justify-center">
      {/* Background 3D Marquee */}
      <div className="absolute inset-0 overflow-hidden">
        <ThreeDMarquee images={images} />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Hero Text Section - Overlaid */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-2xl md:text-7xl font-bold text-white">
          Falcon Solutions <br /> Design. Develop. Create. Soar.
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200 mx-auto">
          At Falcon Solutions, we don't just offer services —
          we craft solutions that transform visions into reality.
          From stunning websites to bold branding, from powerful video edits to sleek user experiences —
          we're the creative engine behind digital success.
        </p>
      </div>
    </div>
  );
}
