"use client";

import { useState } from "react";

const AnimatedPhrase = ({ phrase }: { phrase: string }) => {
  const [hovered, setHovered] = useState(false);
  const words = phrase.split(" ");

  return (
    <span
      className="relative group inline-block text-white font-bold"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <>
          <span className="animate-fadeInLeft">{words[1]}</span>
          <span className="ml-1 animate-fadeInRight">{words[0]}</span>
        </>
      ) : (
        <>
          <span>{words[0]}</span>
          <span className="ml-1">{words[1]}</span>
        </>
      )}
    </span>
  );
};

export default AnimatedPhrase;
