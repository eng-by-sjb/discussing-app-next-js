import { db } from "..";
import { type Post } from "prisma/prisma-client";

export type PostsListDisplayData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

export async function fetchPostsBySlug(slug: string): Promise<PostsListDisplayData[]> {
  const posts = await db.post.findMany({
    where: {
      topic: {
        slug,
      },
    },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });

  return posts;
}

export async function fetchAllPosts(): Promise<PostsListDisplayData[]> {
  let posts = await db.post.findMany({
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });

  return posts;
}
