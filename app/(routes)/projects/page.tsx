import CustomTable from "@/app/_components/CustomTable";
import { getProjects } from "@/app/_services";
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
  const { projects } = await getProjects();

  return (
    <section className="pt-24 md:pt-32 md:pb-20">
      <Link
        href="/"
        className="flex items-center group hover:opacity-100 transition-opacity duration-20 ease-in-out"
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
      <CustomTable data={projects} />
    </section>
  );
}
