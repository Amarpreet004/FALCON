import MobileAppHero from "./hero";
import TripleIphoneFrame from "./scondiframe";
import ScoreSection from "./score";
const MobileApps = () => (
	<div className="mt-20 flex flex-col gap-10">
		<MobileAppHero />
		<ScoreSection />
		<TripleIphoneFrame />
	</div>
);

export default MobileApps;
