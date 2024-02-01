type DeleteCommentFormState = {
  errors: {};
};

export const deleteComment = async (
  { commentId }: { commentId: string },
  formState: DeleteCommentFormState
) => {
  //todo check if user is logged in and the user

  // todo revalidate show post

  return {
    errors: {},
  };
};
