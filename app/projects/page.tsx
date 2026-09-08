import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h2 className="text-4xl font-bold mb-4">Projects Overview</h2>
        <div className="flex flex-col items-center justify-center space-y-4 mb-6">
            <Link href="/projects/opensource" className="text-blue-500 hover:underline mb-2">
                Open Source Projects
            </Link>
            <Link href="/projects/school" className="text-blue-500 hover:underline">
                School Projects
            </Link>
      </div>        
    </main>
  );
}