/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Moonwise (https://sketchfab.com/Moonwise)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/night-sky-aebbd4f5b37a4dfd8e3556de9084bae9
Title: Night sky
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import clouds from "../assets/3d/night_sky.glb";

export default function Model({ props }) {
  const cloudRef = useRef();
  const { nodes, materials } = useGLTF(clouds);

  useFrame((_, delta) => {
    cloudRef.current.rotation.y += 0.005 * delta;
  });

  return (
    <group ref={cloudRef}>
      <group
        {...props}
        scale={[21, 21, 21]}
        position={[100, 980, -1500]}
        rotation={[0.1, 1.6, 0]}
      >
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.material_0}
          position={[19.008, -26.751, -25.116]}
          scale={4.451}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.material_0}
          position={[19.008, -16.751, 25.116]}
          scale={4.451}
        />
      </group>
      <group
        {...props}
        scale={[21, 21, 21]}
        position={[100, -980, -1500]}
        rotation={[0.1, 1.6, 0]}
      >
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.material_0}
          position={[19.008, -26.751, -25.116]}
          scale={4.451}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.material_0}
          position={[19.008, -16.751, 25.116]}
          scale={4.451}
        />
      </group>
      <group
        {...props}
        scale={[21, 21, 21]}
        position={[3000, 980, -1500]}
        rotation={[0.1, 0, 0]}
      >
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.material_0}
          position={[19.008, -26.751, -25.116]}
          scale={4.451}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.material_0}
          position={[19.008, -16.751, 25.116]}
          scale={4.451}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/night_sky.glb");
