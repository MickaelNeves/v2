import Link from "next/link";

const Title = () => {
  return (
    <section className="col-span-1 md:h-screen md:sticky top-0 pt-24 md:py-32">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <Link
          href="/"
          className="hover:text-lightened-warm-beige hover:cursor-pointer transition-colors duration-200 ease-in"
        >
          Mickael Neves
        </Link>
      </h1>
      <h2 className="text-lg md:text-xl py-4">Senior Front-End Engineer</h2>
      <p className="max-w-xs text-greyish-white">
        I build products and deliver top-notch user experiences.
      </p>
    </section>
  );
};

export default Title;
