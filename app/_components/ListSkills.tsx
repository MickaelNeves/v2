type Skill = string[];

const ListSkills = ({ skills }: { skills: Skill }) => {
  return (
    <ul className="flex flex-wrap md:justify-end gap-3 text-sm font-medium text-emerald-green">
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
