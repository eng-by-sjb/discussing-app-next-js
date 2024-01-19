import CreateTopicForm from "@/components/topics/Create-Topic-Form";
import TopicList from "@/components/topics/Topic-List";
import { Divider } from "@nextui-org/react";

// TODO: revalidate homepage after every 15 secs

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3 border rounded">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>

      <div className="text-center flex flex-col gap-4">
        <div>
          <CreateTopicForm></CreateTopicForm>
        </div>

        <div className="border shadow py-2 px-2 rounded-lg">
          <h3 className="text-xl">Topics</h3>
          <Divider className="my-2"></Divider>
          <TopicList></TopicList>
        </div>
      </div>
    </div>
  );
}
