interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  projectUrl: string;
}

export default function ProjectCard({ title, description, technologies, projectUrl }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-red-700">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-gray-600 mb-4">Technologies: {technologies}</p>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    </div>
  );
}