"use client";

import React, { useMemo } from "react";

type Skill = { skills: string[] };

const ListSkills = ({ skills }: Skill) => {
  const colors = [
    { bg: "bg-emerald-green/20", text: "text-emerald-green" },
    { bg: "bg-red/20", text: "text-red" },
    { bg: "bg-yellow/20", text: "text-yellow" },
    { bg: "bg-amethyst-purple/20", text: "text-amethyst-purple" },
    { bg: "bg-teal/20", text: "text-teal" },
    { bg: "bg-orange/20", text: "text-orange" },
    { bg: "bg-gray/20", text: "text-gray" },
    { bg: "bg-silver/20", text: "text-silver" },
    { bg: "bg-coral/20", text: "text-coral" },
  ];

  const skillColors = useMemo(() => {
    return skills.map(() => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    });
  }, []);

  return (
    <ul className="flex flex-wrap gap-3 text-sm font-medium">
      {skills.map((skill, index) => {
        const color = skillColors[index];

        return (
          <li key={index}>
            <div className={`${color.bg} ${color.text} py-1 px-3`}>{skill}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListSkills;
