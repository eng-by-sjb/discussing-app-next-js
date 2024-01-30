import { Skeleton } from "@nextui-org/react";

const ShowPostLoading = () => {
  return (
    <div className="mb-8">
      <div className=" p-4 mt-8 mb-4">
        <Skeleton className="h-8 w-auto"></Skeleton>
      </div>
      <div className="p-4 border rounded">
        <Skeleton className="h-20 w-70 p-4"></Skeleton>
      </div>
    </div>
  );
};
export default ShowPostLoading;
