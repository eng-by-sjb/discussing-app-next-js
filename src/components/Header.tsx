import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { auth } from "@/auth";
import * as actions from "@/actions";
import paths from "@/utils/paths";

const Header = async () => {
  const session = await auth();

  let authContent: React.ReactNode;
  if (session?.user) {
    authContent = (
      <Popover placement="bottom">
        <PopoverTrigger>
          <Avatar
            isBordered
            color="primary"
            src={`${session?.user.image}`}
            name={`${session?.user.name}'s profile photo`}></Avatar>
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
    );
  } else {
    authContent = (
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
    );
  }

  return (
    <div>
      <Navbar className="shadow mb-6">
        <NavbarBrand>
          <Link className="font-bold" href={paths.home()}>
            NerdTalk
          </Link>
        </NavbarBrand>

        <NavbarContent justify="center">
          <NavbarItem>
            <Input />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">{authContent}</NavbarContent>
      </Navbar>
    </div>
  );
};
export default Header;
