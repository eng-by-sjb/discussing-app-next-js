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
  topicSlug: string;
};

const CommentMenuDropdown = ({ commentId, userId, topicSlug }: CommentMenuDropdownProps) => {
  const [deleteFormState, deleteAction] = useFormState(
    deleteComment.bind(null, { commentId, userId, topicSlug }),
    {
      errors: {},
    }
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          size="sm"
          isIconOnly
          startContent={<GoKebabHorizontal size={17} />}></Button>
      </DropdownTrigger>

      <DropdownMenu>
        <DropdownItem key="edit" startContent={<FiEdit />}>
          <div>
            <form>
              <button type="submit">Edit</button>
            </form>
          </div>
        </DropdownItem>

        <DropdownItem
          className="text-danger"
          key="delete"
          color="danger"
          startContent={<RiDeleteBin6Line />}>
          <div>
            <form action={deleteAction}>
              <button type="submit" className="w-full text-left">
                Delete
              </button>
            </form>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default CommentMenuDropdown;
