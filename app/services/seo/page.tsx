"use client"
import Hero from "./hero";
import GraphicDesignSection from "./last";
import Seo from "./services";

export default function Page() {
  return (
    <>
    
      <div className="mt-14">
        <Hero />
      </div>
      <div className="mt-8">
        <Seo />
      </div>
      <div className="mt-8">
        <GraphicDesignSection/>
      </div>
      
    </>
  )
}