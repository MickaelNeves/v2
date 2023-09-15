"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CardExperience = ({ link }: { link: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    window.location.href = link;
  };

  return (
    <div
      onClick={handleCardClick}
      className="md:grid md:grid-cols-8 gap-10 mb-10 hover:cursor-pointer card relative md:opacity-50 hover:opacity-100 transition duration-150 ease-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="md:col-span-2 md:order-1 md:text-right text-sm py-3 md:border-l">
        2018 — PRESENT
      </div>

      <div className="md:col-span-6 md:text-right flex flex-col md:items-end relative py-2">
        <div className="absolute inset-0 right-[-2.5rem] col-background z-[-1]" />
        <h3 className="text-lg md:text-xl font-medium mb-2">First position</h3>
        <h3 className="text-lg md:text-xl font-medium mb-2 text-greyish-white">
          Second position
        </h3>
        <Link
          href={link}
          className={`inline-flex gap-2 relative text-sm before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-warm-beige before:absolute before:left-0 before:bottom-0 ${
            isHovered ? "before:scale-x-100 before:origin-left" : ""
          }`}
        >
          <Image
            src="/external.svg"
            width={12}
            height={12}
            alt="External URL"
          />
          Company Name
        </Link>
        <p className="max-w-md text-greyish-white my-2">
          asdsa asdas dsadas asdasd asdada dasdasd asdasdasd asd asd ad ada dad
          asdasddsdsdsdsd asdas asdsdasdasd asdsadasd asdasdasdasdas asdasdas
          asdasdsadsds asdasdasd asdsadsadsadas asdasdas
        </p>
        <ul className="flex flex-wrap gap-3 text-sm font-medium text-emerald-green">
          <li>
            <div className="bg-emerald-green/20 py-1 px-3">React 1</div>
          </li>
          <li>
            <div className="bg-emerald-green/20 py-1 px-3">React 2</div>
          </li>
          <li>
            <div className="bg-emerald-green/20 py-1 px-3">React 3</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardExperience;
