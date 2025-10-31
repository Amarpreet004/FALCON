"use client"
import GraphicsHero from "./hero";
import DomeGallery from "./DomeGallery";
import WhoAreYou from "./graphictype";
import WebDevToolsCards from "./graphic-tools";
import title from "./title";
import StatsDemoCard from "./last";
export default function Page() {
  return (
    <>
    
      <div className="mt-14">
        <GraphicsHero />
      </div>
      <div className="mt-8">
        <WebDevToolsCards/>
      </div>
      <div className="mt-8">
        <WhoAreYou />
      </div>
      <div className="mb-8">
        {title()}
      </div>
      <div style={{ width: '100vw', height: '100vh' }}>
        <DomeGallery />
      </div>
      <div style={{ width: '100vw', height: '100vh' }}>
        <StatsDemoCard />
      </div>
      
    </>
  )
}