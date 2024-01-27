"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { Comment } from "@prisma/client";
import z from "zod";

type CreateCommentFormState = {
  errors: {
    content?: string[];
    generalErr?: string[];
  };
  success?: boolean;
};

const createCommentFormSchema = z.object({
  content: z.string().min(3),
});

export async function createComment(
  { postId, parentId }: { postId: string; parentId?: string },
  formState: CreateCommentFormState,
  formData: FormData
): Promise<CreateCommentFormState> {
  const { content } = Object.fromEntries(formData);

  const result = createCommentFormSchema.safeParse({ content });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors, success: result.success };
  }

  const session = await auth();

  if (!session?.user) {
    return { errors: { generalErr: ["You must be logged in to comment"] }, success: false };
  }

  let comment: Comment;
  try {
    comment = await db.comment.create({
      data: {
        content: result.data.content.toLowerCase(),
        postId,
        parentId,
        userId: session.user.id,
      },
    });
  } catch (error) {}
  //TODO : revalidate show single post page

  return { errors: {}, success: true };
}
