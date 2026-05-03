"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";

export default function Hero3D() {
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-luxury overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-heading tracking-tight text-accent drop-shadow-xl">
          Cinematic Portfolio
        </h1>
        <p className="mt-6 text-xl max-w-2xl text-white/80">
          Where interior design meets cinematic 3D storytelling
        </p>
      </div>
      <Canvas camera={{ position: [0, 2, 10], fov: 55 }} className="z-0">
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[4, 10, 8]} intensity={1.2} />
          <mesh castShadow receiveShadow position={[0, 1, 0]}>
            <sphereGeometry args={[1.9, 92, 48]} />
            <meshPhysicalMaterial
              color="#7c3aed"
              clearcoat={0.7}
              metalness={0.77}
              roughness={0.42}
              envMapIntensity={1.1}
            />
          </mesh>
          <ContactShadows opacity={0.3} width={12} height={12} blur={1.6} far={16} />
          <Environment preset="night" background blur={0.7} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </section>
  );
}
