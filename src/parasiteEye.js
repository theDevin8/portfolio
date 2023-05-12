import React, { useRef, useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function ParasiteEye({ cursorPos }) {
  const group = useRef();

  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "parasite_eyeball/scene.gltf"
  );

  
  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
  
    if (group.current?.rotation) {
      group.current.rotation.y = (mouseX / window.innerWidth) * 2.5 - 1 ?? 0;
      group.current.rotation.x = (mouseY / window.innerHeight) * 2.5 - 1 ?? 0;
    }
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
      const checkIsMobile = () => {
          const width = window.innerWidth;
          setIsMobile(width >= 320 && width <= 961); //change this later
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
  }, [isMobile]);
  
  useEffect(() => {
    if (isMobile) {
      return;
    }
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);
  return (
    <group ref={group}>
      <primitive object={gltf.scene} scale={isMobile ? [1.5, 1.5, 1.5] : [2.2, 2.2, 2.2]}/>
    </group>
  );
}
