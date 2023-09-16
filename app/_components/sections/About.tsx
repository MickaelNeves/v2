import AnimatedWord from "@/app/_components/AnimatedWord";
import AnimatedPhrase from "@/app/_components/AnimatedPhrase";

import { ANIMATION_TYPES, SECTIONS } from "@/app/_types/enums";

const About = () => {
  return (
    <section id={SECTIONS.ABOUT} className="py-24 md:py-32">
      <p className="text-blue-500">
        Back in 2016, I took a leap of faith and{" "}
        <AnimatedPhrase phrase="switched careers" /> from being a telecom
        technician to diving deep into the world of web development. The initial
        spark? My passion for coding was ignited by dreams of game development.
        While the game development scene in Portugal didn&apos;t offer many
        opportunities, my previous portfolio took on a fun twist — it was
        designed as a{" "}
        <AnimatedWord word="game!" type={ANIMATION_TYPES.VORTEX} /> and led me
        to the vast and ever-evolving landscape of web development, and I
        haven&apos;t looked back since.
      </p>
      <p className="text-blue-500 py-4">
        When I&apos;m not knee-deep into work, you&apos;ll find me
        <b className="text-white hover:text-blue-800 transition-colors duration-200 ease-in">
          {" "}
          experimenting with new tech
        </b>
        , continuing my foray into game dev, or taking a complete digital detox.
        Away from the screen, I embrace the
        <b className="text-white hover:text-blue-800 transition-colors duration-200 ease-in">
          {" "}
          digital nomad
        </b>{" "}
        lifestyle, often with a backpack on and a new destination in mind. If
        I&apos;m not exploring a new city or hidden gem in nature, you might
        catch me riding the waves,{" "}
        <AnimatedWord word="surfing" type={ANIMATION_TYPES.WAVE} /> to the
        rhythm of the ocean, or expressing myself through the{" "}
        <AnimatedWord word="beats" type={ANIMATION_TYPES.SHAKE} /> of my drums
        and the <AnimatedWord word="strum" type={ANIMATION_TYPES.SHAKE} /> of my
        guitar.
      </p>
      <p className="text-blue-500">
        Whether it&apos;s the virtual realm of development or the tangible beats
        of music and the thrill of travel, I&apos;m always on the hunt for the
        next adventure!
      </p>
    </section>
  );
};

export default About;
