"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import { SECTIONS } from "../_types/enums";

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    calculateUnderline(activeSection);
  }, [activeSection]);

  return (
    <header className="fixed top-0 left-0 w-full h-16 flex justify-center items-center backdrop-blur-md">
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
        <a
          href={`#${SECTIONS.ABOUT}`}
          className={`nav-link ${
            activeSection === SECTIONS.ABOUT ? `${SECTIONS.ABOUT}-active` : ""
          }`}
        >
          {SECTIONS.ABOUT}
        </a>
        <a
          href={`#${SECTIONS.EXPERIENCE}`}
          className={`nav-link ${
            activeSection === SECTIONS.EXPERIENCE
              ? `${SECTIONS.EXPERIENCE}-active`
              : ""
          }`}
        >
          {SECTIONS.EXPERIENCE}
        </a>
        <a
          href={`#${SECTIONS.PROJECTS}`}
          className={`nav-link ${
            activeSection === SECTIONS.PROJECTS
              ? `${SECTIONS.PROJECTS}-active`
              : ""
          }`}
        >
          {SECTIONS.PROJECTS}
        </a>
      </nav>
    </header>
  );
};

export default Header;
