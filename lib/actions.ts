'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { redirect } from 'next/navigation';

//CREATE
const currentYear = new Date().getFullYear();

const ProjectFormSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters."),
  technologies: z.string().min(2, "Add at least one technology."),
  yearCompleted: z.coerce
    .number()
    .int("Year must be a whole number.")
    .gte(2000, "Year must be 2000 or later.")
    .lte(currentYear, `Year cannot be greater than ${currentYear}.`),
});

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    technologies?: string[];
    yearCompleted?: string[];
  };
  message?: string | null;
};

export async function createProject(
  _prevState: State,
  formData: FormData,
): Promise<State> {
  const raw = {
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
    yearCompleted: formData.get("yearCompleted"),
  };

    const validatedFields = ProjectFormSchema.safeParse(raw);
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Missing or invalid fields. Failed to create project.",
      };
    }

  const { title, description, technologies, yearCompleted } = validatedFields.data;

  try {
    await sql`
            INSERT INTO projects (title, description, technologies, year_completed)
            VALUES (${title}, ${description}, string_to_array(${technologies}, ','), ${yearCompleted})
        `;
  } catch (error) {
    console.error("Error creating project:", error);
      return {
        message: "Database Error: Failed to create projects."
    }
  }

  revalidatePath("/projects");
  redirect("/projects");
}

//READ

//UPDATE
export async function updateProject(id: number, formData: FormData) {
    const raw = {
      title: formData.get("title"),
      description: formData.get("description"),
      technologies: formData.get("technologies"),
      yearCompleted: formData.get("yearCompleted"),
    };

    const parsed = ProjectFormSchema.safeParse(raw);
    if (!parsed.success) {
        throw new Error("Invalid project input.");
    }

    const { title, description, technologies, yearCompleted } = parsed.data;

    try {
        await sql`
            UPDATE projects
            SET title = ${title}, 
                description = ${description}, 
                technologies = string_to_array(${technologies}, ','),
                year_completed = ${yearCompleted} 
            WHERE id = ${id};    
        `;
    } catch (error) {
        console.error("Error editing project:", error);
        throw new Error("Failed to edit project. Please try again later.");
    }

    revalidatePath("/projects");
    redirect("/projects");
}

//DELETE
export async function deleteProject(id: number) {
    try {
        await sql`DELETE FROM projects WHERE id = ${id}`;
    } catch (error) {
        console.error("Error deleting project:", error);
        throw new Error("Failed to delete project. Please try again later.");
    }
    
    revalidatePath('/projects');
}