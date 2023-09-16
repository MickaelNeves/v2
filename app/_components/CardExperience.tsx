"use client";

import { useState } from "react";

import CustomLink from "@/app/_components/CustomLink";
import ListSkills from "@/app/_components/ListSkills";

const CardExperience = ({ link }: { link: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    window.location.href = link;
  };

  return (
    <div
      onClick={handleCardClick}
      className="md:grid md:grid-cols-8 gap-10 mb-10 hover:cursor-pointer card relative md:opacity-25 hover:opacity-100 transition duration-150 ease-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="md:col-span-2 md:order-1 md:text-right text-sm py-3 md:border-l">
        2018 — PRESENT
      </div>

      <div className="md:col-span-6 md:text-right flex flex-col md:items-end relative py-2">
        <div className="hidden md:inline-block md:absolute inset-0 right-[-2.5rem] col-background z-[-1]" />
        <h3 className="text-lg md:text-xl font-medium mb-2">First position</h3>
        <h3 className="text-lg md:text-xl font-medium mb-2 text-greyish-white">
          Second position
        </h3>
        <CustomLink controlled={isHovered} link={link}>
          <p className="text-sm">Company Name</p>
        </CustomLink>
        <p className="max-w-md text-greyish-white my-2">
          asdsa asdas dsadas asdasd asdada dasdasd asdasdasd asd asd ad ada dad
          asdasddsdsdsdsd asdas asdsdasdasd asdsadasd asdasdasdasdas asdasdas
          asdasdsadsds asdasdasd asdsadsadsadas asdasdas
        </p>
        <ListSkills skills={["react", "nextjs", "tailwind"]} />
      </div>
    </div>
  );
};

export default CardExperience;