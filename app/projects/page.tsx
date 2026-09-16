import Link from "next/link";
import ProjectList from "@/components/ProjectList";
import { ProjectSearch } from "@/components/ProjectSearch";
import { fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-db";
import Pagination from "@/components/Pagination";

export default async function Projects(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;

  const projects = await fetchFilteredProjects(query, currentPage);
  
  const totalPages = await fetchProjectsPages(query);

  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2 className="text-4xl font-bold mb-4">Projects Overview</h2>
      <div className="flex flex-col items-center justify-center space-y-4 mb-6">
        <Link
          href="/projects/opensource"
          className="text-blue-500 hover:underline mb-2"
        >
          Open Source Projects
        </Link>
        <Link href="/projects/school" className="text-blue-500 hover:underline">
          School Projects
        </Link>
      </div>

      <div>
        <ProjectSearch />
        <ProjectList projects={projects} />
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}