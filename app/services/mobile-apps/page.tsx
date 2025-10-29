import MobileAppHero from "./hero";
import TripleIphoneFrame from "./scondiframe";
import ScoreSection from "./score";
import WebDevToolsCards from "./tools";
const MobileApps = () => (
	<div className="mt-20 flex flex-col gap-10">
		<MobileAppHero />
		<WebDevToolsCards />
		<ScoreSection />
		
		<TripleIphoneFrame />
	</div>
);

export default MobileApps;
