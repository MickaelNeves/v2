type Skill = { skills: string[]; left?: boolean };

const ListSkills = ({ skills, left = false }: Skill) => {
  return (
    <ul
      className={`flex flex-wrap ${
        left ? "justify-start" : "md:justify-end"
      } gap-3 text-sm font-medium text-emerald-green`}
    >
      {skills.map((skill, index) => {
        return (
          <li key={index}>
            <div className="bg-emerald-green/20 py-1 px-3">{skill}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListSkills;
