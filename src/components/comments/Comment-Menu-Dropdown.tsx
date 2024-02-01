"use client";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { GoKebabHorizontal } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useFormState } from "react-dom";
import { deleteComment } from "@/actions";

type CommentMenuDropdownProps = {
  commentId: string;
  userId: string;
};

const CommentMenuDropdown = ({ commentId, userId }: CommentMenuDropdownProps) => {
  const [deleteFormState, deleteAction] = useFormState(deleteComment.bind(null, { commentId }), {
    errors: {},
  });

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" isIconOnly startContent={<GoKebabHorizontal />}></Button>
      </DropdownTrigger>

      <DropdownMenu>
        <DropdownItem key="delete" startContent={<FiEdit />}>
          <form>
            <button type="submit">Edit</button>
          </form>
        </DropdownItem>
        <DropdownItem
          className="text-danger"
          color="danger"
          key="delete"
          startContent={<RiDeleteBin6Line />}>
          <form action={deleteAction}>
            <button type="submit">Delete</button>
          </form>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default CommentMenuDropdown;
