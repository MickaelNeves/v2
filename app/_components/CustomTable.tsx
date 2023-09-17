import CustomLink from "@/app/_components/CustomLink";
import ListSkills from "@/app/_components/ListSkills";

import { Project } from "@/app/_types";

const CustomTable = ({ data }: { data: Project[] }) => {
  const orderByPeriod = (a: Project, b: Project) => {
    return Number(b.period) - Number(a.period);
  };

  const sortedData = [...data].sort(orderByPeriod);

  return (
    <table
      id="table-content"
      className="mt-12 w-full border-collapse text-left"
    >
      <thead className="sticky top-0 z-10 border-b border-white/10 px-6 py-5 backdrop-blur">
        <tr>
          <th className="py-4 pr-8 text-sm font-semibold">Year</th>
          <th className="py-4 pr-8 text-sm font-semibold">Project</th>
          <th className="hidden py-4 pr-8 text-sm font-semibold lg:table-cell">
            Built at
          </th>
          <th className="hidden py-4 pr-8 text-sm font-semibold lg:table-cell">
            Tech
          </th>
          <th className="hidden py-4 pr-8 text-sm font-semibold sm:table-cell">
            Link
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => {
          return (
            <tr
              key={item.id}
              className="border-b border-white/10 last:border-none"
            >
              <td className="py-4 pr-4 align-top text-sm">
                <div className="translate-y-px">{item.period}</div>
              </td>
              <td className="py-4 pr-4 align-top font-semibold">
                <div>
                  <div className="block sm:hidden">
                    <CustomLink link={item.url}>{item.title}</CustomLink>
                  </div>
                  <div className="hidden sm:block">{item.title}</div>
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                <div className="translate-y-px whitespace-nowrap">
                  {item.company}
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ListSkills skills={item.metadata.skills} />
              </td>
              <td className="hidden py-4 align-top sm:table-cell">
                <CustomLink link={item.url}>Page</CustomLink>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomTable;
