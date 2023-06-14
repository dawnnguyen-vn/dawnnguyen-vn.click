import { BackButton } from "@/components/BackButton";
import { Container } from "@/components/Container";
import { Repository, RepositoryProps } from "@/components/Repository";

export default async function Projects() {
  const data: RepositoryProps[] = [
    {
      name: "Github",
      url: "url1",
      programming_languages: [
        {
          color: "bg-red-500",
          name: "Docker",
        },
      ],
    },
    {
      name: "Hello World",
      url: "url2",
      programming_languages: [
        {
          color: "bg-blue-500",
          name: "HTML",
        },
      ],
    },
  ];
  return (
    <main>
      <Container>
        <BackButton />
        <h1 className="text-3xl font-semibold mb-2">Projects</h1>
        <p className="italic">All the projects I've posted.</p>
        <div className="grid lg:grid-cols-2 gap-5 mt-6">
          {data.map((item: any) => (
            <Repository
              key={item.name}
              name={item.name}
              url={item.url}
              programming_languages={item.programming_languages}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
