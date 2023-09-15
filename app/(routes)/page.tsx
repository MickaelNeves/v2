import { SECTIONS } from "@/app/_types/enums";

import About from "@/app/_components/About";
import Title from "@/app/_components/Title";
import Experience from "@/app/_components/Experience";

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-4 h-full">
      <Title />
      <div className="col-span-2 overflow-y-auto">
        <About />
        <Experience />
        <section id={SECTIONS.PROJECTS} className="h-screen pt-20">
          Projects
        </section>
      </div>
    </div>
  );
}
