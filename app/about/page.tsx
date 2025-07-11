import AboutPage from "./wavebg";
import ProfileCardI from "./profilecards/ProfileCardI";
// Update the import path below to the correct location of InfiniteMovingCardsDemo
// Example: import InfiniteMovingCardsDemo from "./infiniteMovingCardsDemo/InfiniteMovingCardsDemo";
// Update the import path below to the correct location of InfiniteMovingCardsDemo
// Example: import InfiniteMovingCardsDemo from "../components/InfiniteMovingCardsDemo";
import { InfiniteMovingCardsDemo } from "../home/review/review";
export default function About() {
  return <div>
    <AboutPage/>
    <ProfileCardI />
     <InfiniteMovingCardsDemo/>
    </div>}