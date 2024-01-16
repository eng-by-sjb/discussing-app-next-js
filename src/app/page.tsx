import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import CreateTopicForm from "@/components/topics/Create-Topic-Form";

// TODO: revalidate homepage after every 15 secs

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>

      <div>
        <CreateTopicForm></CreateTopicForm>
      </div>
    </div>
  );
}
