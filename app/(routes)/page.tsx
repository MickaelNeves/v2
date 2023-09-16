import Title from "@/app/_components/sections/Title";
import Experience from "@/app/_components/sections/Experience";
import Projects from "@/app/_components/sections/Projects";
import About from "@/app/_components/sections/About";
import Footer from "@/app/_components/Footer";

export default function Home() {
  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-4 h-full">
        <Title />
        <div className="col-span-2 overflow-y-auto">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
}
