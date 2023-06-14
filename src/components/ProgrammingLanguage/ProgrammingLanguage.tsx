export type ProgrammingLanguageProps = {
  name?: string;
  color?: string;
};

export function ProgrammingLanguage({
  name = "undefind",
  color = "black",
}: ProgrammingLanguageProps) {
  return (
    <div className="flex items-center">
      <span className={"w-4 h-4 rounded-full block " + color}></span>
      <span>{name}</span>
    </div>
  );
}
