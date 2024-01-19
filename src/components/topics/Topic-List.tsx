import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/utils/paths";

const TopicList = async () => {
  const topics = await db.topic.findMany();

  const renderTopics = topics.map(({ id, slug }) => {
    return (
      <div key={id}>
        <Link href={paths.topicShow(slug)}>
          <Chip color="warning" variant="flat">
            {slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row gap-2 flex-wrap">{renderTopics}</div>;
};
export default TopicList;
