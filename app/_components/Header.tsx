"use client";

import { RefObject, useEffect, useRef, useState } from "react";

import { SECTIONS } from "@/app/_types/enums";

const NavLink = ({
  activeSection,
  section,
}: {
  activeSection: string;
  section: string;
}) => (
  <a
    href={`#${section}`}
    className={`nav-link ${
      activeSection === section ? `${section}-active` : ""
    }`}
  >
    {section}
  </a>
);

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [underlineStyle, setUnderlineStyle] = useState<{
    left?: string;
    width?: string;
  }>({});
  const navRef = useRef<HTMLDivElement | null>(null);

  const calculateUnderline = (section: string) => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector(
      `.nav-link.${section}-active`
    );
    if (activeLink) {
      const linkDimensions = activeLink.getBoundingClientRect();
      const navDimensions = navRef.current.getBoundingClientRect();

      const left = linkDimensions.left - navDimensions.left;
      const width = linkDimensions.width;

      setUnderlineStyle({
        left: `${left}px`,
        width: `${width}px`,
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const topOffset = window.scrollY;

      const topContent = document.getElementById(SECTIONS.ABOUT);
      const middleContent = document.getElementById(SECTIONS.EXPERIENCE);
      const bottomContent = document.getElementById(SECTIONS.PROJECTS);

      if (topContent && middleContent && topOffset < middleContent.offsetTop) {
        setActiveSection(SECTIONS.ABOUT);
      } else if (
        middleContent &&
        bottomContent &&
        topOffset < bottomContent.offsetTop
      ) {
        setActiveSection(SECTIONS.EXPERIENCE);
      } else {
        setActiveSection(SECTIONS.PROJECTS);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    calculateUnderline(activeSection);
  }, [activeSection]);

  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 flex justify-center items-center backdrop-blur-md">
      <nav
        className="space-x-4 relative flex"
        ref={navRef as RefObject<HTMLDivElement>}
        style={
          {
            "--underline-left": underlineStyle.left || "0px",
            "--underline-width": underlineStyle.width || "0px",
          } as React.CSSProperties
        }
      >
        <NavLink activeSection={activeSection} section={SECTIONS.ABOUT} />
        <NavLink activeSection={activeSection} section={SECTIONS.EXPERIENCE} />
        <NavLink activeSection={activeSection} section={SECTIONS.PROJECTS} />
      </nav>
    </header>
  );
};

export default Header;
