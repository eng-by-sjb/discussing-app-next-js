import type { Post, User, Topic } from "@prisma/client";
import Link from "next/link";
import paths from "@/utils/paths";
import { type PostsListDisplayData } from "@/db/queries/posts";
import { Chip } from "@nextui-org/react";

type Props = {
  fetchPosts: () => Promise<PostsListDisplayData[]>;
};

export default async function PostsList({ fetchPosts }: Props) {
  const posts = await fetchPosts();

  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }

    const postTitle = `${post.postTitle.slice(0, 1).toUpperCase() + post.postTitle.slice(1)}`;

    return (
      <div key={post.id} className="border rounded p-2">
        <Link href={paths.showPost(topicSlug, post.id)}>
          <div className="mb-2 flex justify-between content-center gap-6">
            <h3 className="text-lg font-bold row-span-1">{postTitle}</h3>

            {post._count.comments >= 3 && (
              <Chip size="sm" color="warning" variant="bordered">
                Trending 🔥
              </Chip>
            )}
          </div>
          <div className="flex flex-row content-center gap-8">
            <p className="text-xs text-gray-400">By {post.user.name}</p>
            <p className="text-xs text-gray-400">{post._count.comments} comments</p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
