import Image from "next/image";

import CustomLink from "@/app/_components/CustomLink";
import ListSkills from "@/app/_components/ListSkills";

import { Project } from "@/app/_types";

const CardProject = ({ project }: { project: Project }) => {
  return (
    <div className="gap-10 mb-10 card relative md:opacity-40 hover:opacity-100 transition duration-150 ease-in">
      <div className="md:col-span-6 flex flex-col relative py-2">
        <div className="w-full h-full relative mb-2">
          <Image
            src={project.image.url}
            width={500}
            height={200}
            alt="Project"
          />
        </div>
        <CustomLink controlled={false} link={project.url}>
          <h3 className="text-lg md:text-xl font-medium">{project.title}</h3>
        </CustomLink>
        <p className="max-w-md text-blue-500 my-2">{project.description}</p>
        <ListSkills skills={project.metadata?.skills ?? []} />
      </div>
    </div>
  );
};

export default CardProject;
