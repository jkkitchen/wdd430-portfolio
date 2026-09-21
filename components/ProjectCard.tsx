import { deleteProject } from "@/lib/actions";
import Link from "next/link";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string;
  link?: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  const deleteProjectWithId = deleteProject.bind(null, id); //Add Delete Button
  
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-red-700">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-gray-600 mb-4">Technologies: {technologies}</p>
        <div className="flex items-center gap-4 mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>

          <Link
            href={`/projects/${id}/edit`}
            className="text-blue-700 hover:underline"
          >
            Edit
          </Link>

          <form action={deleteProjectWithId}>
            <button
              type="submit"
              className="text-red-700 hover:underline cursor-pointer"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
