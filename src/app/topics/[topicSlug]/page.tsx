type Params = {
  params: {
    topicSlug: string;
  };
};

const ShowSingleTopicPage = ({ params }: Params) => {
  return <div>Topics Slug Page: {params.topicSlug}</div>;
};
export default ShowSingleTopicPage;
