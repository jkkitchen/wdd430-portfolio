//Updated for streaming learning activity--this list pulls from the database rather than being hard-coded
import ProjectCard from "./ProjectCard";
import { getProjects } from "@/lib/projects-db";

interface ProjectListProps {
  type: "opensource" | "school";
}

export default async function DatabaseProjectList({ type }: ProjectListProps) {
  const projects = await getProjects(type);

  if (projects.length === 0) {
    return <p>No {type} projects yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies.join(", ")}
          link={project.link}
        />
      ))}
    </div>
  );
}
