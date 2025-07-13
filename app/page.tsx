import HomePage from "./home/page";
import FeaturesSectionDemo from "./home/Card";
import { StickyScrollRevealDemo } from "./home/stickyscroll/scroll"
import React from "react";
import { Available } from "./home/available/available";
import { InfiniteMovingCardsDemo } from "./home/review/review";
import { ThreeDMarqueeDemo } from "./home/Hero/hero-in-mobile";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - Desktop */}
      <section className="w-full hidden md:block">
        <HomePage/>
      </section>
      
      {/* Hero Section - Mobile */}
      <section className="w-full block md:hidden">
        <ThreeDMarqueeDemo/>
      </section>
      
      {/* Services Section with proper spacing */}
      <section className="w-full bg-white dark:bg-black pt-20 mt-20">
        <FeaturesSectionDemo/>
      </section>
      
      {/* Other Sections with spacing */}
      <div className="mt-20">
        <StickyScrollRevealDemo/>
      </div>
      <div className="mt-20">
        <Available />
      </div>
      <div className="mt-20">
        <InfiniteMovingCardsDemo/>
      </div>
    </div>
  );
}
