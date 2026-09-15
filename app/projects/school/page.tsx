//Component Level Streaming Learning Activity
import { Suspense } from "react";
import DatabaseProjectList from "@/components/DatabaseProjectList";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";

export const dynamic = "force-dynamic";

export default function SchoolProjects() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2 className="text-4xl font-bold mb-4">School Projects</h2>

      <Suspense fallback={<ProjectCardSkeleton />}>
        <DatabaseProjectList type="school" />
      </Suspense>
    </main>
  );
}
