export function Img({ src, alt }: any) {
  const SRC = src.replace("/public", "");
  console.log(SRC);

  return <img src={SRC} alt={alt} />;
}
