"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./movingcrousel";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "/image1.png",
    name: "Image 1",
    title: "",
  },
  {
    quote: "/image2.png",
    name: "Image 2",
    title: "",
  },
  {
    quote: "/image3.png",
    name: "Image 3",
    title: "",
  },
  {
    quote: "/image4.png",
    name: "Image 4",
    title: "",
  },
  {
    quote: "/image5.png",
    name: "Image 5",
    title: "",
  },
];
