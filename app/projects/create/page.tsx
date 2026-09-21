import { createProject } from "@/lib/actions";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Create Project</h1>

      <form
        action={createProject}
        className="bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <div>
          <label
            htmlFor="title"
            className="block font-semibold text-gray-700 mb-1"
          >
            Title
          </label>

          <input
            id="title"
            name="title"
            required
            className="w-full border border-gray-300 rounded p-2 text-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block font-semibold text-gray-700 mb-1"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            required
            className="w-full border border-gray-300 rounded p-2 text-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="technologies"
            className="block font-semibold text-gray-700 mb-1"
          >
            Technologies (comma-separated)
          </label>

          <input
            id="technologies"
            name="technologies"
            required
            className="w-full border border-gray-300 rounded p-2 text-gray-900"
          />
        </div>

        <button
          type="submit"
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 cursor-pointer"
        >
          Save Project
        </button>
      </form>
    </main>
  );
}
