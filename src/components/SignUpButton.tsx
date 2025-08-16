"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SignUpButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="w-full" variant="default">
      {pending ? "Signing Up..." : "Sign Up"}
    </Button>
  );
}
