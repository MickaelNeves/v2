import Link from "next/link";

import { SECTIONS } from "@/app/_types/enums";
import AnimatedWord from "../_components/AnimatedWord";
import AnimatedPhrase from "../_components/AnimatedPhrase";

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-4 h-full">
      <section className="col-span-1 h-screen md:sticky top-0 py-32">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link
            href="/"
            className="hover:text-lightened-emerald-green hover:cursor-pointer transition-colors duration-200 ease-in"
          >
            Mickael Neves
          </Link>
        </h1>
        <h2 className="text-lg md:text-xl py-4">Senior Front-End Engineer</h2>
        <p className="max-w-xs text-greyish-white">
          I build products and deliver top-notch user experiences.
        </p>
      </section>
      <div className="col-span-2 overflow-y-auto">
        <section id={SECTIONS.ABOUT} className="h-screen pt-32 text-right">
          <p className="text-greyish-white">
            Back in 2016, I took a leap of faith and{" "}
            <AnimatedPhrase phrase="switched careers" /> from being a telecom
            technician to diving deep into the world of web development. The
            initial spark? My passion for coding was ignited by dreams of game
            development. While the game development scene in Portugal
            didn&apos;t offer many opportunities, my previous portfolio took on
            a fun twist — it was designed as a{" "}
            <AnimatedWord word="game!" type="vortex" /> and led me to the vast
            and ever-evolving landscape of web development, and I haven&apos;t
            looked back since.
          </p>
          <p className="text-greyish-white py-4">
            When I&apos;m not knee-deep in code, you&apos;ll find me
            <b className="text-white hover:text-lightened-emerald-green transition-colors duration-200 ease-in">
              {" "}
              experimenting with new tech
            </b>
            , continuing my foray into game dev, or taking a complete digital
            detox. Away from the screen, I embrace the
            <b className="text-white hover:text-lightened-emerald-green transition-colors duration-200 ease-in">
              {" "}
              digital nomad
            </b>{" "}
            lifestyle, often with a backpack on and a new destination in mind.
            If I&apos;m not exploring a new city or hidden gem in nature, you
            might catch me riding the waves,{" "}
            <AnimatedWord word="surfing" type="wave" /> to the rhythm of the
            ocean, or expressing myself through the{" "}
            <AnimatedWord word="beats" type="shake" /> of my drums and the{" "}
            <AnimatedWord word="strum" type="shake" /> of my guitar.
          </p>
          <p className="text-greyish-white">
            Whether it&apos;s the virtual realm of development or the tangible
            beats of music and the thrill of travel, I&apos;m always on the hunt
            for the next adventure!
          </p>
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
