import * as color from "../../../public/programing-language-color.json";

export type ProgrammingLanguageProps = {
  name: string;
};

export function ProgrammingLanguage({ name }: ProgrammingLanguageProps) {
  return (
    <div className="flex items-center">
      <span
        className={
          "w-4 h-4 rounded-full block " + color[name as keyof typeof color]
        }
      ></span>
      <span>{name}</span>
    </div>
  );
}
