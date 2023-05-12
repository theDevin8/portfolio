import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function KrakenEye({ cursorPos }) {
  const group = useRef();

  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "kraken_eyeball/scene.gltf"
  );

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (group.current) {
      group.current.rotation.y = (mouseX / window.innerWidth) * 2.5 - 1;
      group.current.rotation.x = (mouseY / window.innerHeight) * 2.5 - 1;
    }
  };

  return (
    <group ref={group}>
      <primitive object={gltf.scene} scale={[16, 16, 16]}/>
    </group>
  );
}
