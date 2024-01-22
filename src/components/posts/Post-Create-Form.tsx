import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import FormButton from "../reused/Form-Button";

const PostCreateForm = () => {
  return (
    <Popover backdrop="opaque">
      <PopoverTrigger>
        <Button color="primary" variant="bordered">
          Add New Post
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <form action="">
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg text-center">Create a Post</h3>

            <Input
              name="postName"
              label="Post Name"
              placeholder="Post Name"
              labelPlacement="outside"
              isRequired
            />
            <Textarea
              name="description"
              label="Description"
              placeholder="Description"
              labelPlacement="outside"
              isRequired
            />
            <FormButton
              text="Create Post"
              loadingText="Creating Post"
              color="primary"
              variant="solid"></FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};
export default PostCreateForm;
