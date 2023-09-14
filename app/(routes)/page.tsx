import { SECTIONS } from "@/app/_types/enums";

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-3 h-full">
      <section className="col-span-1 h-screen md:sticky top-0 py-32">
        Left content
      </section>
      <div className="col-span-2 overflow-y-auto">
        <section id={SECTIONS.ABOUT} className="h-screen pt-20">
          About
        </section>
        <section id={SECTIONS.EXPERIENCE} className="h-screen pt-20">
          Experience
        </section>
        <section id={SECTIONS.PROJECTS} className="h-screen pt-20">
          Projects
        </section>
      </div>
    </div>
  );
}
