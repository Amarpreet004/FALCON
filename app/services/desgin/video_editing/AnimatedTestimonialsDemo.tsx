import * as React from "react";
import { AnimatedTestimonials } from "./animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://videos.pexels.com/video-files/4098617/4098617-uhd_2560_1440_30fps.mp4",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_30fps.mp4",
    },
  ];
  return (
    <>
  <h1 className="text-4xl md:text-6xl font-bold custom-class text-center mt-5" >
      Video Editing
      
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  );
}
