import { db } from "@/db";
import paths from "@/utils/paths";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImCircleLeft } from "react-icons/im";

type Props = {
  postId: string;
  topicSlug: string;
};

export default async function ShowPost({ postId, topicSlug }: Props) {
  const post = await db.post.findFirst({
    where: {
      id: postId,
    },
  });

  if (!post) {
    notFound();
  }

  const postTitle = `${post.postTitle.slice(0, 1).toUpperCase() + post.postTitle.slice(1)}`;
  const content = `${post.content.slice(0, 1).toUpperCase() + post.content.slice(1)}`;

  return (
    <div className="m-4">
      <div className="grid grid-cols-3 gap-2 mt-8 mb-4  ">
        <Link
          href={paths.showTopic(topicSlug)}
          className="underline decoration-solid flex items-center gap-2">
          <ImCircleLeft size={20}></ImCircleLeft>
          {`${topicSlug}`}
        </Link>
        <h1 className="text-2xl font-bold col-span-2">{postTitle}</h1>
      </div>
      <p className="p-4 border rounded">{content}</p>
    </div>
  );
}
