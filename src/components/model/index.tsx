import { useRef, useState } from "react";
import { Mesh } from "three";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

type ModelProps = {
  position?: {
    x: number;
    y: number;
    z: number;
  };
};

export const Model = ({ position }: ModelProps) => {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const ref = useRef<Mesh>(null!);
  const scroll = useScroll();

  const modelPosition = position ?? {
    x: 0,
    y: 0,
    z: 0,
  };

  const { nodes, materials } = useGLTF("/models/banana-transformed.glb");

  const [data] = useState({
    x: modelPosition.x,
    y: modelPosition.y,
    z: modelPosition.z,
    rX: 2,
    rY: 2,
    rZ: 3,
  });

  useFrame(() => {
    const offset = 1 - scroll.offset;
    ref.current.rotation.y += 0.001;

    ref.current.position.set(Math.sin(offset) * 6, data.y, data.z);

    ref.current.scale.set(0.5, 0.5, 0.5);
  });

  return (
    <mesh
      ref={ref}
      //@ts-ignore
      geometry={nodes.banana.geometry}
      material={materials.skin}
      rotation={[-Math.PI / 2, 0, 0]}
      material-emissive="orange"
    />
  );
};
