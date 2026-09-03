import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  technologies: string;
  projectUrl: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          projectUrl={project.projectUrl}
        />
      ))}
    </div>
  );
}