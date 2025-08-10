"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, useTexture } from '@react-three/drei';
import { Suspense } from 'react';

const portfolio = [
  { img: '/business.jpg', alt: 'Logo Design for BusinessX' },
  { img: '/Design & Development.jpg', alt: 'Branding for Tech Startup' },
  { img: '/Strategy & Planning.jpg', alt: 'Poster for Strategy Event' },
  { img: '/image25.jpg', alt: 'Brochure for Cafe' },
  { img: '/image26.jpg', alt: 'Banner for School' },
  { img: '/image27.jpg', alt: 'Infographic for Marketing' },
];

type PortfolioCubeProps = {
  img: string;
  alt: string;
  position?: [number, number, number];
};

function PortfolioCube({ img, alt, position = [0, 0, 0] }: PortfolioCubeProps) {
  const texture = useTexture(img) as any; // workaround for type
  return (
    <mesh position={position as [number, number, number]} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={Array.isArray(texture) ? texture[0] : texture} />
      <Html center position={[0, -1.5, 1.1]}>
        <div className="bg-white/80 text-xs text-black px-2 py-1 rounded shadow">{alt}</div>
      </Html>
    </mesh>
  );
}

export default function ThreeDPortfolio() {
  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden bg-white border-2 border-[#E50914] shadow-lg relative">
      {/* Decorative red accent ring */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="w-full h-full rounded-xl border-4 border-[#E50914] opacity-10" />
      </div>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} shadows style={{ background: 'white' }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow color="#E50914" />
        <Suspense fallback={null}>
          {/* Arrange cubes in a circle */}
          {portfolio.map((item, i) => {
            const angle = (i / portfolio.length) * Math.PI * 2;
            const x = Math.cos(angle) * 4;
            const z = Math.sin(angle) * 4;
            return <PortfolioCube key={item.img} img={item.img} alt={item.alt} position={[x, 0, z]} />;
          })}
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
      {/* Falcon brand watermark */}
      <div className="absolute bottom-2 right-4 z-20 text-xs text-[#E50914] font-bold opacity-70 select-none pointer-events-none tracking-widest">FALCON</div>
    </div>
  );
}
