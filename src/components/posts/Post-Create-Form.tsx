"use client";

import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import FormButton from "../reused/Form-Button";
import { createPost } from "@/actions";
import { useFormState } from "react-dom";

const PostCreateForm = ({ topicSlug }: { topicSlug: string }) => {
  const [formState, action] = useFormState(createPost.bind(null, topicSlug), {
    errors: {},
  });

  return (
    <Popover backdrop="opaque">
      <PopoverTrigger>
        <Button color="primary" variant="bordered">
          Add New Post
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg text-center">Create a Post</h3>

            <Input
              name="title"
              label="Title"
              placeholder="Title"
              labelPlacement="outside"
              isRequired
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="Content"
              placeholder="Content"
              labelPlacement="outside"
              isRequired
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />

            {formState.errors.generalErr && (
              <div className="text-center p-2 text-slate-600 bg-red-100 border border-red-500 rounded-lg">
                {formState.errors.generalErr}
              </div>
            )}

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
