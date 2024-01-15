import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
} from "@nextui-org/react";
import { auth } from "@/auth";
import * as actions from "@/actions";
import paths from "@/utils/paths";

const Header = async () => {
  const session = await auth();

  let authContent: React.ReactNode;
  if (session?.user) {
    authContent = (
      <Avatar
        isBordered
        color="primary"
        src={`${session?.user.image}`}
        name={`${session?.user.name} profile photo`}></Avatar>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <Button type="submit" color="primary" variant="flat">
            Sign In
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button type="submit" color="primary" variant="solid">
            Sign Up
          </Button>
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
