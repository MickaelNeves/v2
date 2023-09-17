type Skill = { skills: string[] };

const ListSkills = ({ skills }: Skill) => {
  const skillColors = [
    { bg: "bg-emerald-green/20", text: "text-emerald-green", skill: "ReactJS" },
    { bg: "bg-red/20", text: "text-red", skill: "NextJS" },
    { bg: "bg-yellow/20", text: "text-yellow", skill: "TypeScript" },
    {
      bg: "bg-amethyst-purple/20",
      text: "text-amethyst-purple",
      skill: "Tailwind",
    },
    { bg: "bg-teal/20", text: "text-teal", skill: "React-Query" },
    { bg: "bg-orange/20", text: "text-orange", skill: "SvelteKit" },
    { bg: "bg-gray/20", text: "text-gray", skill: "NodeJS" },
    { bg: "bg-silver/20", text: "text-silver", skill: "MongoDB" },
    { bg: "bg-coral/20", text: "text-coral", skill: "GraphQL" },
    { bg: "bg-blue/20", text: "text-blue", skill: "NestJS" },
    { bg: "bg-indigo/20", text: "text-indigo", skill: "MeteorJS" },
    { bg: "bg-pink/20", text: "text-pink", skill: "Figma" },
    { bg: "bg-rose/20", text: "text-rose", skill: "Web3" },
    { bg: "bg-cyan/20", text: "text-cyan", skill: "Jest" },
    { bg: "bg-fuchsia/20", text: "text-fuchsia", skill: "React-Native" },
    { bg: "bg-violet/20", text: "text-violet", skill: "PHP" },
    { bg: "bg-light-blue/20", text: "text-light-blue", skill: "Laravel" },
    { bg: "bg-lime/20", text: "text-lime", skill: "MySQL" },
    { bg: "bg-emerald/20", text: "text-emerald", skill: "SCRUM" },
    { bg: "bg-green/20", text: "text-green", skill: "Redux" },
    { bg: "bg-purple/20", text: "text-purple", skill: "Bootstrap" },
    { bg: "bg-slack-green/20", text: "text-slack-green", skill: "SlackAPI" },
  ];

  return (
    <ul className="flex flex-wrap gap-3 text-sm font-medium">
      {skills.map((skill, index) => {
        let color = skillColors.find((color) => color.skill === skill);

        if (!color) {
          color = {
            bg: "bg-gray/20",
            text: "text-gray",
            skill: "",
          };
        }

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
