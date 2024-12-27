import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import batScene from "../assets/3d/vampire_glow_bat_2.glb";

function BatFly({ isRotating, ...props }) {
  const ref = useRef();
  const { nodes, materials, scene, animations } = useGLTF(batScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Fly"].play();
    } else {
      actions["Fly"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh
      {...props}
      position={props.batflyPosition}
      scale={props.batflyScale}
      ref={ref}
    >
      <group name="Sketchfab_Scene" rotation={[0, 0.5, 0]}>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]}>
                <group
                  name="c60bc758ef564487a3b896e7cb3dc0cafbx_1"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                >
                  <group name="Object_2_2">
                    <group name="RootNode_3">
                      <group name="Object_4_4">
                        <group name="GLTF_created_0">
                          <primitive object={nodes.GLTF_created_0_rootJoint} />
                          <skinnedMesh
                            name="Object_48"
                            geometry={nodes.Object_48.geometry}
                            material={materials.material}
                            skeleton={nodes.Object_48.skeleton}
                          />
                          <group name="Object_7_7_correction">
                            <group name="Object_7_7" />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </mesh>
  );
}

export default BatFly;
