"use client";

import { useState } from "react";

import CustomLink from "@/app/_components/CustomLink";
import ListSkills from "@/app/_components/ListSkills";

import { Experience } from "@/app/_types";

const CardExperience = ({
  company,
  metadata,
  description,
  url,
  period,
  isFirstCard,
}: Experience & { isFirstCard: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleCardClick}
      className="md:grid md:grid-cols-8 gap-10 mb-10 hover:cursor-pointer card relative md:opacity-40 hover:opacity-100 transition duration-150 ease-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="md:col-span-2 text-sm py-3 md:border-r">{period}</div>
      <div className="md:col-span-6 flex flex-col relative py-2">
        <div className="hidden md:inline-block md:absolute inset-0 left-[-2.5rem] col-background z-[-1]" />
        {metadata.positions.map((position, index) => (
          <h3
            key={index}
            className={`text-lg md:text-xl font-medium mb-2 ${
              !isFirstCard || (isFirstCard && index !== 0)
                ? "text-blue-500"
                : ""
            }`}
          >
            {position}
          </h3>
        ))}
        <CustomLink controlled={isHovered} link={url}>
          <p className="text-sm">{company}</p>
        </CustomLink>
        <p className="max-w-md text-blue-500 my-2">{description}</p>
        <ListSkills skills={metadata.skills} />
      </div>
    </div>
  );
};

export default CardExperience;
