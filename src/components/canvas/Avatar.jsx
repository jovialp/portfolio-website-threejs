import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Avatar = () => {
  const avatar = useGLTF("/avatar/Jovial-avatar.glb");

  return (
    <primitive
      object={avatar.scene}
      scale={2.4}
      position-y={-3}
      rotation-y={-0.5}
    />
  );
};

const AvatarCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <spotLight
          position={[-20, 20, 30]}
          angle={0.4}
          penumbra={0}
          intensity={1.5}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={2} />
        <Avatar />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default AvatarCanvas;
