import { shadow } from "@/app/styles/utils";
import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "./DarkModeToggle";
import Link from "next/link";
import Logout from "./Logout";

const Header = () => {
  const user = 1;
  return (
    <div
      className="relative flex h-24 w-full bg-popover items-center justify-between px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <h1 className="flex flex-col leading-7 pb-1 font-semibold text-2xl">
        Notes <span>App</span>
      </h1>
      <div className="flex gap-2">
      {user ? (
        <Logout/>
      ) : (
        <>
          <Button  asChild>
            <Link className="hidden sm:block" href="/signup">Sign-up</Link>
          </Button>
          <Button  asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
        </>
      )}
            <DarkModeToggle/>

      </div>

    </div>
  );
};

export default Header;
