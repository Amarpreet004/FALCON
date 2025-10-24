import GraphicsHero from "./hero";
import ThreeDPortfolio from "./ThreeDPortfolio";
import Services from "./Services";
export default function Page() {
  return (
    <>
      <div className="mt-8">
        <GraphicsHero />
      </div>
      <div className="mt-8">
        <ThreeDPortfolio />
      </div>
      <div className="mt-8">
        <Services />
      </div>
    </>
  )
}