"use server";

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

  //TODO : revalidate show single post page

  return { errors: {}, success: true };
}
