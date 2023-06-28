import { BackButton } from "@/components/BackButton";
import { Container } from "@/components/Container";
import { Repository } from "@/components/Repository";
import { Project } from "@/types";
import { getProjects } from "@/utils/markdown";

export default async function Projects() {
  console.log(await getProjects());

  const projects = await getProjects();

  return (
    <main>
      <Container>
        <BackButton />
        <h1 className="text-3xl font-semibold mb-2">Projects</h1>
        <p className="italic">All the projects I've posted.</p>
        <div className="grid lg:grid-cols-2 gap-5 mt-6">
          {projects.map((project: Project) => (
            <Repository
              key={project.title}
              title={project.title}
              link={project.link}
              language={project.language}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
