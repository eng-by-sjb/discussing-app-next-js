import { fetchCommentsByPostId } from "@/db/queries/fetch-comments";
import { Divider } from "@nextui-org/react";
import ShowComment from "./show-comment";

type ListCommentsProps = {
  postId: string;
};

const ListComments = async ({ postId }: ListCommentsProps) => {
  const comments = await fetchCommentsByPostId(postId);

  if (!comments) {
    return <div>No comments</div>;
  }

  const parentComments = comments.filter((c) => c.parentId === null);

  const renderComments = parentComments.map((c) => {
    return <ShowComment key={c.id} postId={postId} commentId={c.id}></ShowComment>;
  });

  return (
    <>
      <Divider className="my-2"></Divider>

      <h1 className="text-lg font-bold mt-8">{`${comments.length} ${
        comments.length > 1 ? "comments" : "comment"
      }`}</h1>
      {renderComments}
    </>
  );
};
export default ListComments;
