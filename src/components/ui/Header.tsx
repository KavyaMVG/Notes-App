import { shadow } from "@/app/styles/utils";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";

const Header = () => {
  const user = null;
  return (
    <div
      className="relative flex h-24 w-full bg-popover items-center justify-between px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <h1 className="flex flex-col leading-7 pb-1 font-semibold text-2xl">
        Notes <span>App</span>
      </h1>

      {user ? (
        <Button variant="outline">Logout</Button>
      ) : (
        <>
          <Button  variant="outline" className="hidden sm:block">
            <Link href="/signup">Signup</Link>
            Signup
          </Button>
          <Button  variant="outline">
            Login
            <Link href="/login">Login</Link>
          </Button>
        </>
      )}

      <DarkModeToggle/>
    </div>
  );
};

export default Header;
