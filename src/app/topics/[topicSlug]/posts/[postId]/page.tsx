type Params = {
  params: {
    postId: string;
  };
};

const ShowSinglePostPage = ({ params }: Params) => {
  return (
    <div>
      <div>ShowPost: {params.postId}</div>
    </div>
  );
};
export default ShowSinglePostPage;
