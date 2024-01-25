import PostCreateForm from "@/components/posts/Create-Post-Form";
import PostsList from "@/components/posts/List-Posts";
import { fetchPostsBySlug } from "@/db/queries/posts";
import { Divider } from "@nextui-org/react";

type Params = {
  params: {
    topicSlug: string;
  };
};

const ShowSingleTopicPage = ({ params }: Params) => {
  const topicSlug = `${params.topicSlug.slice(0, 1).toUpperCase() + params.topicSlug.slice(1)}`;

  return (
    <section className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3 border rounded">
        <h1 className="text-2xl font-bold mb-2">Topics: {topicSlug}</h1>
        <PostsList fetchPosts={() => fetchPostsBySlug(params.topicSlug)}></PostsList>
      </div>

      <aside className="text-center flex flex-col gap-4">
        <PostCreateForm topicSlug={params.topicSlug}></PostCreateForm>
        <article className="border shadow py-2 px-2 rounded-lg">
          <h3 className="text-xl">Topics</h3>
          <Divider className="my-2"></Divider>
        </article>
      </aside>
    </section>
  );
};
export default ShowSingleTopicPage;
