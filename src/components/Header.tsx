import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Kbd } from "@nextui-org/react";
import * as actions from "@/actions";
import paths from "@/utils/paths";
import HeaderAuth from "./Header-Auth";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link className="font-bold" href={paths.home()}>
          Paths
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[14rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            startContent={<IoSearch size={25} />}
            endContent={<Kbd keys={"command"}>K</Kbd>}
            placeholder="Type to search..."
            type="search"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth></HeaderAuth>
      </NavbarContent>
    </Navbar>
  );
};
export default Header;
