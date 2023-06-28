import { ProgrammingLanguage } from "@/components/ProgrammingLanguage";
import { Project } from "@/types";

export function Repository({
  title = "undefind",
  link = "#",
  language = "",
}: Project) {
  return (
    <div className="h-24 border border-gray-300 rounded-md px-4 py-3 flex flex-col justify-between">
      <a
        href={link}
        className="font-semibold w-fit text-blue-600 hover:border-b-2 border-blue-600"
      >
        {title}
      </a>

      <ProgrammingLanguage name={language} />
    </div>
  );
}
