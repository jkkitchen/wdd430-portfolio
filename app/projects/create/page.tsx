"use client";

import { useActionState } from "react";
import { createProject, type State } from "@/lib/actions";

const initialState: State = { message: null, errors: {} };

export default function Page() {

const [state, formAction, isPending] = useActionState(
  createProject,
  initialState,
);
    return (
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-white">Create Project</h1>

        <form
          action={formAction}
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
              aria-describedby="title-error"
              className="w-full border border-gray-300 rounded p-2 text-gray-900 focus:outline-2 focus:outline-blue-600"
            />

            <div id="title-error" aria-live="polite" aria-atomic="true">
              {state.errors?.title?.map((error) => (
                <p key={error} className="mt-1 text-sm text-red-600">
                  {error}
                </p>
              ))}
            </div>
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
              aria-describedby="description-error"
              className="w-full border border-gray-300 rounded p-2 text-gray-900 focus:outline-2 focus:outline-blue-600"
            />

            <div id="description-error" aria-live="polite" aria-atomic="true">
              {state.errors?.description?.map((error) => (
                <p key={error} className="mt-1 text-sm text-red-600">
                  {error}
                </p>
              ))}
            </div>
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
              aria-describedby="technologies-error"
              className="w-full border border-gray-300 rounded p-2 text-gray-900 focus:outline-2 focus:outline-blue-600"
            />

            <div id="technologies-error" aria-live="polite" aria-atomic="true">
              {state.errors?.technologies?.map((error) => (
                <p key={error} className="mt-1 text-sm text-red-600">
                  {error}
                </p>
              ))}
            </div>
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
              required
              aria-describedby="yearCompleted-error"
              className="w-full border border-gray-300 rounded p-2 text-gray-900 focus:outline-2 focus:outline-blue-600"
            />

            <div id="yearCompleted-error" aria-live="polite" aria-atomic="true">
              {state.errors?.yearCompleted?.map((error) => (
                <p key={error} className="mt-1 text-sm text-red-600">
                  {error}
                </p>
              ))}
            </div>
          </div>

          {state.message ? (
            <p className="text-sm text-red-600">{state.message}</p>
          ) : null}

          <button
            type="submit"
            disabled={isPending}
            className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Saving..." : "Save Project"}
          </button>
        </form>
      </main>
    );
}
