import { convertStringToId, convertStringToURL } from "@/utils/common";

export const H3 = ({ children }: any) => {
  const header = children as string;
  const href = convertStringToURL(header);
  const id = convertStringToId(header);

  return (
    <h3 id={id}>
      <a
        className="hover:border-b-2 border-dashed border-[#111827]"
        href={href}
      >
        {children}
      </a>
    </h3>
  );
};
