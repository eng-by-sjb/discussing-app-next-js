"use server";

import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";
import { db } from "@/db";
import { type Post } from "@prisma/client";
import paths from "@/utils/paths";

const createPostSchema = z.object({
  postTitle: z.string().min(4),
  content: z.string().min(8),
});

type FormState = {
  errors: {
    postTitle?: string[];
    content?: string[];
    generalErr?: string[];
  };
};

export async function createPost(
  topicSlug: string,
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  const { postTitle, content } = Object.fromEntries(formData.entries());

  const result = createPostSchema.safeParse({ postTitle, content });

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

  let post: Post;

  try {
    post = await db.post.create({
      data: {
        postTitle: result.data.postTitle.toLowerCase(),
        content: result.data.content.toLowerCase(),
        topicId: topic.id,
        userId: session.user.id,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { errors: { generalErr: [error.message] } };
    }
    return { errors: { generalErr: ["Something went wrong. Please try again later."] } };
  }

  revalidatePath(paths.showTopic(topicSlug));
  redirect(paths.showPost(topicSlug, post.id));
}
