"use client";
import { ThreeDMarquee } from "./3d-marquee";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
export function ThreeDMarqueeDemo() {
  const router = useRouter();
  
  const handleContactClick = () => {
    router.push('/contact');
  };

  const handleExploreClick = () => {
    router.push('/contact/Bookcall');
  };

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
        <h1 className="text-3xl md:text-7xl font-bold text-white mb-6">
          Launch your website in hours, not days
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-300 mx-auto mb-10">
          With AI, you can launch your website in hours, not days. Try our best in class, state of the art, cutting edge AI tools to get your website up.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleExploreClick}
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 min-w-[160px]"
          >
           Book a Call
          </button>
          <button 
            onClick={handleContactClick}
            className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 min-w-[160px]"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
