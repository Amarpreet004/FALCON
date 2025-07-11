"use client"
import React from 'react';
import Beams from './Waves';

export default function AboutPage() {
  return (
   
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        {/* Overlayed text on beams */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            color: '#fff',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textShadow: '0 2px 16px #000, 0 0 8px #000',
            pointerEvents: 'none',
            userSelect: 'none',
            textAlign: 'center',
          }}
        >
      Powering the next generation of business lending.
        </div>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
   
  );
}