import CustomLink from "@/app/_components/CustomLink";
import ListSkills from "@/app/_components/ListSkills";

import { Project } from "@/app/_types";

const CustomTable = ({ data }: { data: Project[] }) => {
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
        {data.map((item) => {
          return (
            <tr
              key={item.id}
              className="border-b border-white/10 last:border-none"
            >
              <td className="py-4 pr-4 align-top text-sm">
                <div className="translate-y-px">{item.year}</div>
              </td>
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                <div>
                  <div className="block sm:hidden">
                    <CustomLink link={item.link}>{item.title}</CustomLink>
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
                <ListSkills left skills={item.skills} />
              </td>
              <td className="hidden py-4 align-top sm:table-cell">
                <CustomLink link={item.link}>Page</CustomLink>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomTable;
