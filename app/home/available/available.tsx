import React from "react";
import { useId } from "react";

export function Available() {
  return (
    <div className="py-20 lg:py-40">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white text-center mb-16">
       Our Clients
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-transform duration-300 group hover:scale-105 hover:shadow-2xl hover:z-10 hover:shadow-black/40 dark:hover:shadow-white/40 flex flex-col items-center justify-center"
          >
            <Grid size={20} />
            <div className="relative z-20 mb-4 flex justify-center items-center h-20">
              <img
                src={feature.image}
                alt={feature.title}
                className="object-contain"
                style={{
                  width: feature.width || '128px',
                  height: feature.height || '64px'
                }}
              />
            </div>
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20 text-center">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "The Uniques Community",
    image: "/theuniquesCommunity-CaNp0pLp.png",
    width: "140px",
    height: "60px"
  },
  {
    title: "Global Future Summit",
    image: "/glob-Dzyn9PLW.png",
    width: "150px",
    height: "140px"
  },
  {
    title: "Elevate 2024",
    description:
      "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
    image: "/elevate_logo.png",
    width: "130px",
    height: "100px"
  },
  {
    title: "Godigitify",
    image: "/Godigitify.png",
    width: "135px",
    height: "100px"
  },
  {
    title: "Click Masters",
    image: "/click masters logo.png",
    width: "125px",
    height: "52px"
  },
  {
    title: "Bhart-Tech Hackathon 2.0",
    image: "/2.0logo.eb68755e126d8cfbb6ab.png",
    width: "110px",
    height: "48px"
  },
  {
    title: "Amar Travel Agency",
    image: "/gvuvg.png",
    width: "115px",
    height: "50px"
  },
  {
    title: "TechLearn Academy",
   image: "/Logo-2.png",
    width: "128px",
    height: "56px"
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  // Generate a unique set of coordinates to avoid duplicate keys
  const generateUniqueCoordinates = () => {
    const usedCoords = new Set();
    const result = [];
    
    for (let i = 0; i < 5; i++) {
      let x, y, coordKey;
      do {
        x = Math.floor(Math.random() * 4) + 7;
        y = Math.floor(Math.random() * 6) + 1;
        coordKey = `${x}-${y}`;
      } while (usedCoords.has(coordKey));
      
      usedCoords.add(coordKey);
      result.push([x, y]);
    }
    
    return result;
  };
  
  const p = pattern ?? generateUniqueCoordinates();
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, index: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
