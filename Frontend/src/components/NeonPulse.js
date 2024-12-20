"use client";

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function Scene() {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}

export default function NeonPulse() {
  return (
    <div className="w-full h-screen bg-dark">
      <Suspense fallback={<div>Loading...</div>}>
        <Scene />
      </Suspense>
    </div>
  );
}