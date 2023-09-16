const Footer = () => {
  return (
    <footer className="text-center md:justify-start pt-40 pb-20 text-blue-500 text-sm">
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
      . Check the source code here.
    </footer>
  );
};

export default Footer;
