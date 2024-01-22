"use client";

import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import { createTopic } from "@/actions";
import FormButton from "../reused/Form-Button";

const CreateTopicForm = () => {
  const [formState, action] = useFormState(createTopic, {
    errors: {},
  });

  return (
    <Popover backdrop="opaque">
      <PopoverTrigger>
        <Button color="primary" variant="bordered">
          Add New Topic
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg text-center">Create a Topic</h3>

            <Input
              name="topicName"
              label="Topic Name"
              labelPlacement="outside"
              placeholder="Topic Name"
              isRequired
              isInvalid={!!formState.errors.topicName}
              errorMessage={formState.errors.topicName?.join(", ")}
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your Topic"
              isRequired
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}></Textarea>

            {formState.errors.generalErr && (
              <div className="text-center p-2 text-slate-600 bg-red-100 border border-red-500 rounded-lg">
                {formState.errors.generalErr}
              </div>
            )}

            <FormButton
              text="Create"
              loadingText="Creating"
              color="primary"
              variant="solid"></FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default CreateTopicForm;
