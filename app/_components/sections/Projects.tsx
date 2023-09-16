import dynamic from "next/dynamic";

import { SECTIONS } from "@/app/_types/enums";

import CustomLink from "@/app/_components/CustomLink";

const CardSlider: any = dynamic(() => import("@/app/_components/CardSlider"), {
  ssr: false,
});

const data = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    image: "/website1.png",
    skills: ["react", "nextjs", "tailwind"],
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    image: "/website1.png",
    skills: ["react", "nextjs", "tailwind"],
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    image: "/website1.png",
    skills: ["react", "nextjs", "tailwind"],
  },
  {
    id: 4,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    image: "/website1.png",
    skills: ["react", "nextjs", "tailwind"],
  },
  {
    id: 5,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    image: "/website1.png",
    skills: ["react", "nextjs", "tailwind"],
  },
  {
    id: 6,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    image: "/website1.png",
    skills: ["react", "nextjs", "tailwind"],
  },
  {
    id: 7,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    image: "/website1.png",
    skills: ["react", "nextjs", "tailwind"],
  },
];

const Projects = () => {
  return (
    <section id={SECTIONS.PROJECTS} className="h-[80vh] pt-20">
      <CardSlider data={data} />
      <div className="flex md:justify-end">
        <CustomLink link="/projects">Go to Projects</CustomLink>
      </div>
    </section>
  );
};

export default Projects;
