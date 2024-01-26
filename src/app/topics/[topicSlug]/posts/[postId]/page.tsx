import CommentCreateForm from "@/components/comments/create-comment-form";
import ShowPost from "@/components/posts/Show-Post";
import { Divider } from "@nextui-org/react";

type Params = {
  params: {
    postId: string;
    topicSlug: string;
  };
};

const ShowSinglePostPage = ({ params }: Params) => {
  return (
    <div className="space-y-3">
      <ShowPost postId={params.postId} topicSlug={params.topicSlug}></ShowPost>
      <Divider className="my-2"></Divider>

      <CommentCreateForm postId={params.postId} startOpen={true}></CommentCreateForm>
    </div>
  );
};
export default ShowSinglePostPage;
