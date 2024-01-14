type Params = {
  params: {
    postId: string;
  };
};

const ShowSinglePostPage = ({ params }: Params) => {
  return <div>ShowPost: {params.postId}</div>;
};
export default ShowSinglePostPage;
