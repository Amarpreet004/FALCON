"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  videos,
  className,
}: {
  images?: string[];
  videos?: string[];
  className?: string;
}) => {
  const mediaItems = videos || images || [];
  const gridRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(mediaItems.length / 3);

  const firstPart = mediaItems.slice(0, third);
  const secondPart = mediaItems.slice(third, 2 * third);
  const thirdPart = mediaItems.slice(2 * third);

  return (
    <div
      className={cn("h-[100rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start w-full gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={isClient ? { y: translateFirst } : {}} // Apply the translateY motion value here only on client
              key={"grid-1" + idx}
            >
              {videos ? (
                <video
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="400"
                  autoPlay={isClient}
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={el}
                  className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  alt="thumbnail"
                />
              )}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={isClient ? { y: translateSecond } : {}} key={"grid-2" + idx}>
              {videos ? (
                <video
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="400"
                  autoPlay={isClient}
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={el}
                  className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  alt="thumbnail"
                />
              )}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={isClient ? { y: translateThird } : {}} key={"grid-3" + idx}>
              {videos ? (
                <video
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="400"
                  autoPlay={isClient}
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={el}
                  className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  alt="thumbnail"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
