import CustomTable from "@/app/_components/CustomTable";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Project 1",
    year: 2023,
    company: "Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    image: "/website1.png",
    skills: ["react", "nextjs", "tailwind"],
  },
  {
    id: 2,
    title: "Project 2",
    year: 2023,
    company: "Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    image: "/website1.png",
    skills: ["react", "nextjs", "tailwind"],
  },
  {
    id: 3,
    title: "Project 3",
    year: 2023,
    company: "Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    image: "/website1.png",
    skills: ["react", "nextjs", "tailwind"],
  },
  {
    id: 4,
    title: "Project 3",
    year: 2023,
    company: "Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    image: "/website1.png",
    skills: ["react", "nextjs", "tailwind"],
  },
  {
    id: 5,
    title: "Project 3",
    year: 2023,
    company: "Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    image: "/website1.png",
    skills: ["react", "nextjs", "tailwind"],
  },
  {
    id: 6,
    title: "Project 3",
    year: 2023,
    company: "Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    image: "/website1.png",
    skills: ["react", "nextjs", "tailwind"],
  },
  {
    id: 7,
    title: "Project 3",
    year: 2023,
    company: "Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    image: "/website1.png",
    skills: ["react", "nextjs", "tailwind"],
  },
];

export default function Projects() {
  return (
    <section className="pt-24 md:pt-32 md:pb-20">
      <Link
        href="/"
        className="flex items-center group hover:opacity-80 transition-opacity duration-20 ease-in-out"
      >
        <Image
          className="transition-transform transform group-hover:translate-x-[-5px]"
          src="/arrow-back.svg"
          width={24}
          height={24}
          alt="External URL"
        />
        Go Back
      </Link>
      <CustomTable data={data} />
    </section>
  );
}
