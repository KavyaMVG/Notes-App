"use client";
import { useTransition } from "react";
import { CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

type props = {
  type: "login" | "signUp";
};
const Authform = ({ type }: props) => {
  const [isPending, startTransition] = useTransition();
  const isLoginForm = type === "login";

  const handleSubmit = (formData: FormData) => {
    console.log("formData");
  };

  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="Password">Password</Label>
          <Input
            type="Password"
            id="Password"
            name="Password"
            required
            placeholder="Enter your Password"
            disabled={isPending}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-6 mt-4">
        <Button className="w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Sign Up"
          )}
        </Button>
        <p className="text-xs">
          {isLoginForm
            ? "Don't have an account yet?"
            : "Already have an account"}{" "}
          <Link href={isLoginForm ? "/sign-up" : "/login"} className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50": ""}`}>
            {isLoginForm ? "Sign Up" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
};

export default Authform;
