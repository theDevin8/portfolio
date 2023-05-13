import React, { useRef, useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function KrakenEye({ cursorPos }) {
  const group = useRef();

  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "kraken_eyeball/scene.gltf"
  );

 

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
      const checkIsMobile = () => {
          const width = window.innerWidth;
          setIsMobile(width >= 320 && width <= 428); //change this later
          console.log(width);
      };

      window.addEventListener('resize', checkIsMobile);
      checkIsMobile();
      return () => {
          window.removeEventListener('resize', checkIsMobile);
      };
  }, []);

  useEffect(() => {
    let animationId;
    const animateEye = () => {
      group.current.rotation.y -= 0.01; // change the rotation speed if needed
      animationId = requestAnimationFrame(animateEye);
    };
    if (isMobile) {
      animationId = requestAnimationFrame(animateEye);
    } else {
      document.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (isMobile) {
        cancelAnimationFrame(animationId);
      } else {
        document.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, );

  const handleMouseMove = (event) => {
    if (!isMobile && group.current && group.current.rotation) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      group.current.rotation.y = (mouseX / window.innerWidth) * 2.5 - 1 ?? 0;
      group.current.rotation.x = (mouseY / window.innerHeight) * 2.5 - 1 ?? 0;
    }
  };

  return (
    <group ref={group}>
      <primitive object={gltf.scene} scale={isMobile ? [11, 11, 11] : [16, 16, 16]}/>
    </group>
  );
}
