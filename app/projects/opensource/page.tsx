import { getProjects } from "@/lib/projects-db";

export const dynamic = "force-dynamic"; //This is for static vs dynamic learning activity. This makes the page rendering dynamic rather than static.

export default async function OpenSourceProjects() {
  const projects = await getProjects("opensource");

  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2 className="text-4xl font-bold mb-4">Open Source Projects</h2>
      {projects.length === 0 ? (
        <p>No open source projects yet.</p>
      ) : (
        projects.map((project) => (
          <div key={project.id} className="mb-6">
            <h3 className="text-2xl font-semibold">{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                View Project
              </a>
            )}
          </div>
        ))
      )}
    </main>
  );
}
