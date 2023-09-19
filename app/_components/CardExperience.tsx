"use client";

import React, { useState } from "react";

import CustomLink from "@/app/_components/CustomLink";
import ListSkills from "@/app/_components/ListSkills";

import { Experience } from "@/app/_types";

type TextChild = {
  text: string;
  bold: boolean;
};

type ListItemChild = {
  text: string;
  bold: boolean;
  children: TextChild[];
};

type ListItem = {
  children: ListItemChild[];
};

type DescriptionTypeObject = {
  type: "paragraph" | "bulleted-list";
  children: TextChild[] | ListItem[];
};

const CardExperience: React.FC<Experience & { isFirstCard: boolean }> = ({
  company,
  metadata,
  descriptionBlock,
  url,
  period,
  isFirstCard,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatText = (text: string, isBold = false) => {
    return isBold ? <b className="font-semibold text-white">{text}</b> : text;
  };

  const renderParagraph = (content: TextChild[]) => (
    <p>
      {content.map((item, i) => (
        <React.Fragment key={i}>
          {formatText(item.text, item.bold)}
        </React.Fragment>
      ))}
    </p>
  );

  const renderBulletedList = (items: ListItem[]) => (
    <ul className="mt-2">
      {items.map((listItem, i) => (
        <li key={i}>
          {listItem.children[0].children.map((child, childIndex) => (
            <React.Fragment key={childIndex}>
              {formatText(child.text, child.bold)}
            </React.Fragment>
          ))}
        </li>
      ))}
    </ul>
  );

  const getDescriptionFragment = (typeObj: DescriptionTypeObject) => {
    switch (typeObj.type) {
      case "paragraph":
        return renderParagraph(typeObj.children as TextChild[]);
      case "bulleted-list":
        return renderBulletedList(typeObj.children as ListItem[]);
      default:
        return null;
    }
  };

  const handleCardClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleCardClick}
      className="md:grid md:grid-cols-8 gap-10 mb-10 hover:cursor-pointer card relative md:opacity-40 hover:opacity-100 transition duration-150 ease-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="md:col-span-2 text-sm py-3 md:border-r">{period}</div>
      <div className="md:col-span-6 flex flex-col relative py-2">
        <div className="hidden md:inline-block md:absolute inset-0 left-[-2.5rem] col-background z-[-1]" />
        {metadata.positions.map((position, index) => (
          <h3
            key={index}
            className={`text-lg md:text-xl font-medium mb-2 ${
              !isFirstCard || (isFirstCard && index !== 0)
                ? "text-blue-500"
                : ""
            }`}
          >
            {position}
          </h3>
        ))}
        <CustomLink controlled={isHovered} link={url}>
          <p className="text-sm">{company}</p>
        </CustomLink>
        <div className="max-w-md text-blue-500 my-2">
          {descriptionBlock.raw.children.map((typeObj, index) => (
            <React.Fragment key={index}>
              {getDescriptionFragment(typeObj)}
            </React.Fragment>
          ))}
        </div>
        <ListSkills skills={metadata.skills} />
      </div>
    </div>
  );
};

export default CardExperience;
