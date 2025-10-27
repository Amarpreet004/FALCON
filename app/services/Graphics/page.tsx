"use client"
import GraphicsHero from "./hero";
import DomeGallery from "./DomeGallery";
import WhoAreYou from "./graphictype";
import WebDevToolsCards from "./graphic-tools";
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
      <div style={{ width: '100vw', height: '100vh' }}>
        <DomeGallery />
      </div>
      
    </>
  )
}