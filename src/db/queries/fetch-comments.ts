import { cache } from "react";
import { db } from "..";
import { Comment } from "@prisma/client";

type CommentsWithUser = Comment & {
  user: { name: string | null; image: string | null };
  post: {
    topic: { slug: string };
  };
};

export const fetchCommentsByPostId = cache(async (postId: string): Promise<CommentsWithUser[]> => {
  return await db.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: { select: { name: true, image: true } },
      post: { select: { topic: { select: { slug: true } } } },
    },
  });
});
