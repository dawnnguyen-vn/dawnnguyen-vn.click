export function Img({ src, alt }: any) {
  const SRC = src.replace("/public", "");

  return <img src={SRC} alt={alt} />;
}
