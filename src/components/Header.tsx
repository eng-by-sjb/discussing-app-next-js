import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input } from "@nextui-org/react";
import * as actions from "@/actions";
import paths from "@/utils/paths";
import HeaderAuth from "./Header-Auth";

const Header = () => {
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

        <NavbarContent justify="end">
          <HeaderAuth></HeaderAuth>
        </NavbarContent>
      </Navbar>
    </div>
  );
};
export default Header;
