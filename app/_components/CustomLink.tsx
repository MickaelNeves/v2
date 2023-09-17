import Link from "next/link";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  controlled?: boolean;
  link: string;
};

const CustomLink = ({ children, controlled = false, link }: Props) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={`inline-flex gap-2 relative w-fit before:w-full before:h-0.5 before:origin-left before:transition-transform before:duration-300 before:scale-x-0 before:bg-blue-500 before:absolute before:left-0 before:bottom-0 ${
        controlled
          ? "before:scale-x-100 before:origin-left"
          : "hover:before:scale-x-100 hover:before:origin-left"
      }`}
    >
      <Image src="/external.svg" width={12} height={12} alt="External URL" />
      {children}
    </Link>
  );
};

export default CustomLink;
