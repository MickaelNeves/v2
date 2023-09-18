import CustomLink from "./CustomLink";

const Footer = () => {
  return (
    <footer className="text-center md:justify-start pt-40 pb-20 text-blue-500 text-sm flex items-center">
      Built with
      <span className="text-white hover:text-blue-800 transition-colors duration-200 ease-in ml-1 font-semibold">
        Next.js
      </span>
      ,
      <span className="text-white hover:text-blue-800 transition-colors duration-200 ease-in mx-1 font-semibold">
        Tailwind
      </span>
      and
      <span className="text-white hover:text-blue-800 transition-colors duration-200 ease-in ml-1 font-semibold">
        TypeScript
      </span>
      <span className="mr-2">. Check the source code</span>
      <CustomLink
        link="https://github.com/MickaelNeves/v2"
        controlled={false}
        newTab
      >
        here.
      </CustomLink>
    </footer>
  );
};

export default Footer;
