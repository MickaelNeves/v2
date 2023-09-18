import { SECTIONS } from "@/app/_types/enums";

import CustomLink from "@/app/_components/CustomLink";
import CardSlider from "@/app/_components/CardSlider";

import { getProjects } from "@/app/_services";

const Projects = async () => {
  const { projects } = await getProjects();

  return (
    <section id={SECTIONS.PROJECTS} className="min-h-screen pt-20">
      <CardSlider data={projects} />
      <CustomLink link="/projects" newTab={false}>
        Go to Projects
      </CustomLink>
    </section>
  );
};

export default Projects;
