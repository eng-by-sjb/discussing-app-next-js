"use client";

import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Spinner,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";

const HeaderAuth = () => {
  const session = useSession();

  if (session.status === "loading") {
    return <Spinner></Spinner>;
  }

  return (
    <>
      {session.data?.user ? (
        <Popover placement="bottom" offset={20} showArrow>
          <PopoverTrigger>
            <Avatar
              isBordered
              color="primary"
              src={session.data?.user.image ?? ""}
              name={session.data?.user.name ?? ""}></Avatar>
          </PopoverTrigger>

          <PopoverContent>
            <div className="py-2 px-1">
              <form action={actions.signOut}>
                <Button type="submit" color="primary" variant="flat">
                  Sign Out
                </Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <>
          <NavbarItem>
            <form action={actions.signIn}>
              <Button type="submit" color="primary" variant="flat">
                Sign In
              </Button>
            </form>
          </NavbarItem>

          <NavbarItem>
            <form action={actions.signIn}>
              <Button type="submit" color="primary" variant="solid">
                Sign Up
              </Button>
            </form>
          </NavbarItem>
        </>
      )}
    </>
  );
};
export default HeaderAuth;
