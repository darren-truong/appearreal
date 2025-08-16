"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SignInButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="w-full" variant="default">
      {pending ? "Signing In..." : "Sign In"}
    </Button>
  );
}
