import { updateProject } from "@/lib/actions";
import { getProjectById } from "@/lib/projects-db";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = Number(params.id); //Converted to a number because it's defined as a number in the db

    //Get project from db
    const project = await getProjectById(id);

    //If project not in db
    if (!project) {
        notFound();
    }

    // Fetch project by id and render the edit form.
    return (
        <main className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-white">Edit Project</h1>

            <form
            action={updateProject.bind(null, id)}
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
                defaultValue={project.title}
                required
                aria-describedby="title-error"
                className="w-full border border-gray-300 rounded p-2 text-gray-900 focus:outline-2 focus:outline-blue-600"
                />

                <p id="title-error" aria-live="polite">
                {/* title error */}
                </p>
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
                defaultValue={project.description}
                required
                aria-describedby="description-error"
                className="w-full border border-gray-300 rounded p-2 text-gray-900 focus:outline-2 focus:outline-blue-600"
                />

                <p id="description-error" aria-live="polite">
                {/* description error */}
                </p>
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
                defaultValue={project.technologies.join(", ")}
                required
                aria-describedby="technologies-error"
                className="w-full border border-gray-300 rounded p-2 text-gray-900 focus:outline-2 focus:outline-blue-600"
                />

                <p id="technologies-error" aria-live="polite">
                {/* technologies error */}
                </p>
            </div>

            <div>
                <label
                htmlFor="yearCompleted"
                className="block font-semibold text-gray-700 mb-1"
                >
                Year Completed
                </label>

                <input
                id="yearCompleted"
                name="yearCompleted"
                type="number"
                min="2000"
                max={new Date().getFullYear()}
                defaultValue={project.year_completed}
                required
                aria-describedby="yearCompleted-error"
                className="w-full border border-gray-300 rounded p-2 text-gray-900 focus:outline-2 focus:outline-blue-600"
                />

                <div id="yearCompleted-error" aria-live="polite" aria-atomic="true">
                {/* year completed error */}
                </div>
                    </div>
                    
                    
            <button
                type="submit"
                className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
            >
                Update Project
            </button>
            </form>
        </main>
    );
}
