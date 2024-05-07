import CardExperience from "@/app/_components/CardExperience";
import CustomLink from "@/app/_components/CustomLink";

import { getExperiences } from "@/app/_services";

import { SECTIONS } from "@/app/_types/enums";

const Experience = async () => {
  const { experiences } = await getExperiences();

  return (
    <section id={SECTIONS.EXPERIENCE} className="py-20 w-full">
      {experiences
        .sort((a, b) => a.order - b.order)
        .map((experience, idx) => (
          <CardExperience
            key={experience.id}
            isFirstCard={idx === 0}
            {...experience}
          />
        ))}
      <CustomLink link="/resume.pdf" newTab={false}>
        Go to CV
      </CustomLink>
    </section>
  );
};

export default Experience;
