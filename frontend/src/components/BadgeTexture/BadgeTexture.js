import React from "react";
import { PerspectiveCamera, Center, Text3D, Resize } from "@react-three/drei";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

function BadgeTexture() {
  // Define your variables here
  const planeWidth = 4; // Example value
  const textureAspect = 1.5; // Example value
  const resizeId = "uniqueId123"; // Example unique ID

  // Load the texture using useLoader
  const texture = useLoader(THREE.TextureLoader, "/assets_incase/logo.png");

  return (
    <>
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1.05}
        position={[0.49, 0.22, 2]}
      />

      <mesh>
        <planeGeometry args={[planeWidth, -planeWidth / textureAspect]} />
        <meshBasicMaterial color={"black"} side={THREE.BackSide} />
      </mesh>

      <Center>
        <Resize key={resizeId} maxHeight={0.45} maxWidth={0.925}>
          <group position={[0, 0.5, 0]}>
            <mesh position={[2.5, -2, 0]}>
              <planeGeometry args={[2, 1]} />
              <meshBasicMaterial map={texture} />
            </mesh>
            <Text3D
              bevelEnabled={false}
              bevelSize={0}
              font="/assets_incase/gt.json"
              height={0.1}
              scale={[0.9, 1, 0.9]}
              position={[0, 1, 0]}
              rotation={[0, Math.PI, Math.PI]}
              color="purple"
            >
              {"Cogni"}
            </Text3D>
            <Text3D
              bevelEnabled={false}
              bevelSize={0}
              font="/assets_incase/gt.json"
              height={0.1}
              scale={[0.7, 1, 0.7]}
              position={[0, 2, 0]}
              rotation={[0, Math.PI, Math.PI]}
            >
              {"Thank you"}
            </Text3D>
          </group>
        </Resize>
      </Center>
    </>
  );
}

export default BadgeTexture;
