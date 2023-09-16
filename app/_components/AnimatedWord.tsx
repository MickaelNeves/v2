"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { ANIMATION_TYPES } from "@/app/_types/enums";

const AnimatedWord = ({
  word,
  type = ANIMATION_TYPES.WAVE,
}: {
  word: string;
  type: ANIMATION_TYPES;
}) => {
  const [hovered, setHovered] = useState(false);
  const wordRef = useRef<HTMLSpanElement | null>(null);

  const blueShades = [
    "#0074D9",
    "#007BD3",
    "#0082CD",
    "#0088C8",
    "#008EC2",
    "#0095BC",
    "#009BB6",
    "#00A2B0",
    "#001F3F",
  ];

  const redShades = [
    "#FF0000",
    "#FF1A1A",
    "#FF3333",
    "#FF4D4D",
    "#FF6666",
    "#FF8080",
    "#FF9999",
    "#FFB3B3",
    "#FFCCCC",
  ];

  const getAnimationClass = () => {
    switch (type) {
      case ANIMATION_TYPES.SHAKE:
        return "animate-shakeAnimation";
      case ANIMATION_TYPES.VORTEX:
        return "";
      default:
        return "animate-waveAnimation";
    }
  };

  const getColorArray = () => {
    switch (type) {
      case ANIMATION_TYPES.WAVE:
        return blueShades;
      case ANIMATION_TYPES.SHAKE:
        return redShades;
      default:
        return [];
    }
  };

  const animateVortex = (start = true) => {
    if (wordRef.current) {
      const children = Array.from(wordRef.current.children);

      if (start) {
        children.forEach((child) => {
          gsap.to(child, {
            rotation: "+=720",
            rotationY: "+=720",
            duration: 1,
            ease: "none",
            repeat: -1,
          });
        });
      } else {
        gsap.killTweensOf(children);
        children.forEach((child) => {
          const currentRotation = gsap.getProperty(child, "rotation");
          const rotationsCompleted = Math.floor(Number(currentRotation) / 360);
          const resetRotation = rotationsCompleted * 360;

          gsap.to(child, {
            rotation: resetRotation,
            rotationY: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        });
      }
    }
  };

  useEffect(() => {
    const children = Array.from(wordRef.current!.children);
    const centerX = wordRef.current!.offsetWidth / 2;

    children.forEach((child) => {
      const element = child as HTMLElement;

      gsap.set(child, {
        transformOrigin: `${centerX - element.offsetLeft}px 50%`,
      });
    });
  }, []);

  useEffect(() => {
    if (type === ANIMATION_TYPES.VORTEX) {
      if (hovered) {
        animateVortex(true);
      } else {
        animateVortex(false);
      }
    }
  }, [type, hovered]);

  return (
    <span
      ref={wordRef}
      className="relative group inline-block text-white font-semibold"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {Array.from(word).map((letter, index) => (
        <span
          key={index}
          data-index={index}
          className={`inline-block ${hovered ? getAnimationClass() : ""}`}
          style={{
            color: hovered
              ? getColorArray()[index % getColorArray().length]
              : "inherit",
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

export default AnimatedWord;
