import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { createTopic } from "@/actions";

const CreateTopicForm = () => {
  return (
    <Popover backdrop="opaque">
      <PopoverTrigger>
        <Button color="primary" variant="bordered">
          Add New Topic
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <form action={createTopic}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg text-center">Create a Topic</h3>
            <Input label="Topic Name" labelPlacement="outside" placeholder="Topic Name" />
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your Topic"></Textarea>
            <Button color="primary" type="submit">
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default CreateTopicForm;
