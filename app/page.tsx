import { getProjects } from "@/lib/projects-db";
import ProjectList from "@/components/ProjectList";


export const dynamic = "force-dynamic";

export default async function Home() {
  // Get all projects from the PostgreSQL database
  const projects = await getProjects();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <section className="w-full">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>

          <p className="text-lg mb-8">
            I&apos;m Jessica Kitchen, here are some of my projects:
          </p>

          <ProjectList projects={projects} />
        </section>
      </main>
    </div>
  );
}
