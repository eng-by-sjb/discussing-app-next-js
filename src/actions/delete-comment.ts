"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/utils/paths";
import { Comment, Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";

type DeleteCommentFormState = {
  errors: {
    generalErr?: string;
  };
};

export const deleteComment = async (
  { commentId, userId, topicSlug }: { commentId: string; userId: string; topicSlug: string },
  formState: DeleteCommentFormState
) => {
  //todo check if user is logged in and the user
  const session = await auth();

  if (!session) {
    return {
      errors: {
        generalErr: "You must be logged in to delete a comment",
      },
    };
  }

  let comment: Comment;

  try {
    comment = await db.comment.delete({
      where: {
        id: commentId,
        userId,
      },
    });
  } catch (error: unknown) {
    return {
      errors: {
        generalErr: "Failed to delete comment",
      },
    };
  }
  revalidatePath(paths.showPost(topicSlug, comment.postId));

  return {
    errors: {},
  };
};
