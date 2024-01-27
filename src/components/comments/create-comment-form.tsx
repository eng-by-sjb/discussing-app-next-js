"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Textarea, Button } from "@nextui-org/react";
import FormButton from "../reused/Form-Button";
import { createComment } from "@/actions";

type CreateCommentFormProps = {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
};

export default function CommentCreateForm({
  postId,
  parentId,
  startOpen = false,
}: CreateCommentFormProps) {
  const [isOpen, setIsOpen] = useState(startOpen);
  const ref = useRef<HTMLFormElement | null>(null);

  const [formState, action] = useFormState(createComment.bind(null, { postId, parentId }), {
    errors: {},
  });

  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();

      if (!startOpen) {
        setIsOpen(false);
      }
    }
  }, [formState, startOpen]);

  const form = (
    <form action={action} ref={ref}>
      <div className="space-y-2 px-1">
        <Textarea
          name="content"
          label="Reply"
          placeholder="Enter your comment"
          isInvalid={!!formState.errors.content}
          errorMessage={formState.errors.content?.join(", ")}
          endContent={
            <FormButton
              text="Create Comment"
              loadingText="Creating Comment"
              color="primary"
              variant="ghost"></FormButton>
          }
        />

        {formState.errors.generalErr && (
          <div className="p-2 bg-red-200 border rounded border-red-400">
            {formState.errors.generalErr?.join(", ")}
          </div>
        )}
      </div>
    </form>
  );

  return (
    <div>
      {!isOpen && (
        <Button size="sm" variant="light" onClick={() => setIsOpen(!isOpen)}>
          Reply
        </Button>
      )}
      {isOpen && form}
    </div>
  );
}
