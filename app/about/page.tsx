"use client";
import { Suspense } from "react";
import AboutPage from "./wavebg";
import ProfileCardI from "./profilecards/ProfileCardI";
import GallerySection from "./courese/courses";
import { InfiniteMovingCardsDemo } from "../home/review/review";
import AboutFalcon from "./Falconabout/aboutfalcon";
import Steps from "./steps/steps";

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <Suspense fallback={<LoadingFallback />}>
        <AboutPage/>
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <AboutFalcon />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Steps />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ProfileCardI />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <GallerySection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <InfiniteMovingCardsDemo/>
      </Suspense>
    </div>
  );
}