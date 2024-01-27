import CommentCreateForm from "@/components/comments/create-comment-form";
import ListComments from "@/components/comments/list-comments";
import ShowPost from "@/components/posts/Show-Post";
import { Divider } from "@nextui-org/react";

type Params = {
  params: {
    postId: string;
    topicSlug: string;
  };
};

const ShowSinglePostPage = ({ params }: Params) => {
  const { postId, topicSlug } = params;
  return (
    <div className="space-y-3">
      <ShowPost postId={postId} topicSlug={topicSlug}></ShowPost>
      {/* <Divider className="my-2"></Divider> */}

      <CommentCreateForm postId={postId} startOpen={true}></CommentCreateForm>
      <ListComments postId={postId}></ListComments>
    </div>
  );
};
export default ShowSinglePostPage;
