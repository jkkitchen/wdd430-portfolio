// Skeleton layout for Open Source Projects page

export default function Loading() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full max-w-3xl animate-pulse">
        {/* Open Source Projects heading */}
        <div className="h-10 w-3/4 bg-gray-300 rounded mb-6"></div>

        {/* Project skeleton */}
        <div className="mb-6">
          {/* Project title */}
          <div className="h-7 w-1/2 bg-gray-300 rounded mb-3"></div>

          {/* Project description */}
          <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-3/4 bg-gray-300 rounded mb-3"></div>

          {/* Technologies */}
          <div className="h-4 w-2/3 bg-gray-300 rounded mb-3"></div>

          {/* Project link */}
          <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </main>
  );
}
