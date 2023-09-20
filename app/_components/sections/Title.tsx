import Link from "next/link";
import Image from "next/image";
import CustomLink from "../CustomLink";
import { socialData } from "@/app/config";

const Title = () => {
  return (
    <section className="flex flex-col col-span-1 md:h-screen md:sticky top-0 pt-24 md:pt-32 md:pb-20">
      <Image src="/me.png" width={200} height={200} alt="Mickael Neves" />
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        <Link
          href="/"
          className="hover:text-blue-800 hover:cursor-pointer transition-colors duration-200 ease-in"
        >
          Mickael Neves
        </Link>
      </h1>
      <h2 className="text-lg md:text-xl py-4">Senior Front-End Engineer</h2>
      <p className="max-w-xs text-blue-500">
        I build products and deliver top-notch user experiences.
      </p>
      <div className="my-6 md:mt-20 flex-1">
        <CustomLink link="/recommendations.pdf" newTab={false}>
          Recommendations
        </CustomLink>
      </div>
      <div className="flex items-center gap-6">
        {socialData.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-40 transition duration-150 ease-in"
          >
            <Image
              src={social.icon}
              width={24}
              height={24}
              alt="External URL"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Title;
