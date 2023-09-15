import Link from "next/link";
import Image from "next/image";

import CardExperience from "@/app/_components/CardExperience";
import { SECTIONS } from "@/app/_types/enums";

const Experience = () => {
  return (
    <section id={SECTIONS.EXPERIENCE} className="pt-20">
      <CardExperience link="/" />
      <CardExperience link="/" />
      <div className="flex md:justify-end">
        <Link
          href="/resume.pdf"
          className="inline-flex gap-2 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-warm-beige before:absolute before:left-0 before:bottom-0"
        >
          <Image
            src="/external.svg"
            width={12}
            height={12}
            alt="External URL"
          />
          Go to CV
        </Link>
      </div>
    </section>
  );
};

export default Experience;
