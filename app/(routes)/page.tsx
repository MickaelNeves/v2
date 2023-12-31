import Title from "@/app/_components/sections/Title";
import Experience from "@/app/_components/sections/Experience";
import Projects from "@/app/_components/sections/Projects";
import About from "@/app/_components/sections/About";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="md:grid md:grid-cols-3 md:gap-20 h-full">
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
