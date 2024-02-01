import { fetchCommentsByPostId } from "@/db/queries/fetch-comments";
import { timestampFormatter } from "@/utils/timestamp-formatter";
import Image from "next/image";
import CommentCreateForm from "./create-comment-form";
import CommentMenuDropdown from "./Comment-Menu-Dropdown";
import { auth } from "@/auth";

type ShowCommentProp = {
  postId: string;
  commentId: string;
};

const ShowComment = async ({ postId, commentId }: ShowCommentProp) => {
  const comments = await fetchCommentsByPostId(postId);

  const session = await auth();

  const comment = comments.find((comment) => comment.id === commentId);

  if (!comment) {
    return null;
  }

  const childrenComment = comments.map((comment) => {
    if (comment.parentId === commentId) {
      return <ShowComment key={comment.id} postId={postId} commentId={comment.id} />;
    }
    return null;
  });

  return (
    <div className="p-4 mt-2 mb-1 mx-4 flex flex-col border rounded-lg">
      <div className="flex gap-3 items-center">
        <Image
          src={comment.user.image ?? ""}
          alt="user image"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"></Image>

        <div className="w-full flex flex-col gap-4">
          <div className="ml-4 ">
            <div className="flex justify-between mb-1">
              <p className="text-sm font-medium text-gray-500">{comment.user.name}</p>
              <div className="flex gap-x-2 justify-center items-center">
                <p className="text-sm font-medium text-gray-500">
                  {timestampFormatter(comment.createdAt)}
                </p>
                {session?.user.id === comment.userId && (
                  <CommentMenuDropdown commentId={comment.id} userId={comment.userId} />
                )}
              </div>
            </div>

            <p className="text-gray-900 mb-2">{comment.content}</p>
            <CommentCreateForm postId={comment.postId} parentId={comment.id} />
          </div>
        </div>
      </div>

      <div className="ml-4 mt-4">{childrenComment}</div>
    </div>
  );
};
export default ShowComment;
