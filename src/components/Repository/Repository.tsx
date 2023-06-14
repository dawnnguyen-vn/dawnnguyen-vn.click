import {
  ProgrammingLanguage,
  ProgrammingLanguageProps,
} from "@/components/ProgrammingLanguage";

export type RepositoryProps = {
  name?: string;
  url?: string;
  programming_languages?: ProgrammingLanguageProps[];
};

export function Repository({
  name = "undefind",
  url = "#",
  programming_languages = [],
}: RepositoryProps) {
  return (
    <div className="h-24 border border-gray-300 rounded-md px-4 py-3 flex flex-col justify-between">
      <a
        href={url}
        className="font-semibold w-fit text-blue-600 hover:border-b-2 border-blue-600"
      >
        {name}
      </a>
      {programming_languages ? (
        <div className="flex gap-2">
          {programming_languages.map((item) => (
            <ProgrammingLanguage
              key={item.name}
              name={item.name}
              color={item.color}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
