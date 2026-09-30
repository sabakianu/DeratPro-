"use client";

import React, { Suspense, useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

function SprayModel() {
  const { scene } = useGLTF("/spray.glb");
  const modelRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={3}
      position={[0, -1.5, 0]}
    />
  );
}

function CustomSnapControls() {
  const controlsRef = useRef<any>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { camera } = useThree();

  const spherical = useMemo(() => new THREE.Spherical(), []);

  useFrame(() => {
    if (!isDragging && controlsRef.current) {
      spherical.setFromVector3(camera.position);
      spherical.phi = THREE.MathUtils.lerp(spherical.phi, Math.PI / 2, 0.05);

      camera.position.setFromSpherical(spherical);
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableDamping={true}
      enableZoom={true}
      minDistance={3}
      maxDistance={8}
      onStart={() => setIsDragging(true)}
      onEnd={() => setIsDragging(false)}
      minPolarAngle={0.1}
      maxPolarAngle={(Math.PI * 5) / 3}
    />
  );
}

export default function HeroVisual() {
  return (
    <div className="w-full relative rounded-2xl bg-bg-muted p-2 shadow-lg border border-border-light">
      <div className="relative w-full h-115 md:h-125 rounded-xl overflow-hidden bg-linear-to-b from-bg-white via-bg-muted to-bg-main flex items-center justify-center">
        <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} />
            <Environment preset="city" />

            <CustomSnapControls />

            <Float
              speed={2}
              rotationIntensity={0}
              floatIntensity={0.5}
              floatingRange={[-0.1, 0.1]}
            >
              <Suspense fallback={null}>
                <SprayModel />
              </Suspense>
            </Float>
          </Canvas>
        </div>

        <div className="absolute top-4 left-4 z-20 pointer-events-none flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-bg-white/90 backdrop-blur-md border border-border-light shadow-sm text-primary text-xs font-semibold">
          <span className="material-symbols-outlined text-[16px] text-brand-accent">
            verified
          </span>
          <span>ESCORTĂ BIO-SECURIZATĂ</span>
        </div>

        <div className="absolute bottom-4 right-4 z-20 pointer-events-none flex items-center gap-2 px-3 py-2 rounded-lg bg-bg-dark/90 text-text-light backdrop-blur-md shadow-md text-xs font-medium">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-ping" />
          <span>
            Dispecerat Mobil:{" "}
            <strong className="text-brand-accent font-bold">
              DISPONIBIL ACUM
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
}
