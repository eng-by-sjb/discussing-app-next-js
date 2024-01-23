"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import z from "zod";

const createPostSchema = z.object({
  title: z.string().min(4),
  content: z.string().min(8),
});

type FormState = {
  errors: {
    title?: string[];
    content?: string[];
    generalErr?: string[];
  };
};

export async function createPost(
  topicSlug: string,
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  const { title, content } = Object.fromEntries(formData.entries());

  const result = createPostSchema.safeParse({ title, content });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth();

  if (!session?.user) {
    return { errors: { generalErr: ["Login or Sign Up to create a post for this Topic."] } };
  }

  const topic = await db.topic.findFirst({
    where: { slug: topicSlug },
  });

  if (!topic) {
    return {
      errors: {
        generalErr: ["Kindly add a topic before creating a post."],
      },
    };
  }

  return { errors: {} };

  // TODO:  revalidate topic show page
}
