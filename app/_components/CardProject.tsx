import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import CustomLink from "@/app/_components/CustomLink";

import { Project } from "@/app/_types";

const ListSkills: any = dynamic(() => import("@/app/_components/ListSkills"), {
  ssr: false,
});

const CardProject = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    window.location.href = project.link;
  };

  return (
    <div
      onClick={handleCardClick}
      className="gap-10 mb-10 hover:cursor-pointer card relative md:opacity-25 hover:opacity-100 transition duration-150 ease-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="md:col-span-6 flex flex-col relative py-2">
        <div className="w-full h-full relative mb-2">
          <Image src={project.image} width={500} height={200} alt="Project" />
        </div>
        <CustomLink controlled={isHovered} link={project.link}>
          <h3 className="text-lg md:text-xl font-medium">{project.title}</h3>
        </CustomLink>
        <p className="max-w-md text-blue-500 my-2">{project.description}</p>
        <ListSkills skills={project.skills} />
      </div>
    </div>
  );
};

export default CardProject;
