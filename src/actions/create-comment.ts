"use server";

import z from "zod";

type CreateCommentFormState = {
  errors: {
    content?: string[];
    generalErr?: string[];
  };
  success?: boolean;
};

export async function createComment(
  { postId, parentId }: { postId: string; parentId?: string },
  formState: CreateCommentFormState,
  formData: FormData
): Promise<CreateCommentFormState> {
  //TODO : revalidate show single post page

  console.log("comment");

  return { errors: {}, success: true };
}
