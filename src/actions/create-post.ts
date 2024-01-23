"use server";

import { auth } from "@/auth";
import z from "zod";

const createPostSchema = z.object({
  title: z.string().min(4),
  content: z.string().min(10),
});

type FormState = {
  errors: {
    title?: string[];
    content?: string[];
    generalErr?: string[];
  };
};

export async function createPost(formState: FormState, formData: FormData): Promise<FormState> {
  const { title, content } = Object.fromEntries(formData.entries());

  const result = createPostSchema.safeParse({ title, content });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth();

  if (!session?.user) {
    return { errors: { generalErr: ["Login or Sign Up to create a post for this Topic."] } };
  }

  return { errors: {} };

  // TODO:  revalidate topic show page
}
