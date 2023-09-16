import CardExperience from "@/app/_components/CardExperience";
import CustomLink from "@/app/_components/CustomLink";

import { SECTIONS } from "@/app/_types/enums";

const Experience = () => {
  return (
    <section id={SECTIONS.EXPERIENCE} className="py-20 w-full">
      <CardExperience link="/" />
      <CardExperience link="/" />
      <CustomLink link="/resume.pdf">Go to CV</CustomLink>
    </section>
  );
};

export default Experience;
