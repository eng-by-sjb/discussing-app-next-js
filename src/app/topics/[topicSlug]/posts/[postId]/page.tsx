import ShowPost from "@/components/posts/Show-Post";
import paths from "@/utils/paths";
import Link from "next/link";
import { FaBackspace } from "react-icons/fa";
import { ImCircleLeft } from "react-icons/im";

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
    </div>
  );
};
export default ShowSinglePostPage;
