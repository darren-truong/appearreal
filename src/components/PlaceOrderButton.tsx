import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { CheckIcon, LoaderIcon } from "lucide-react";

export default function PlaceOrderButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="w-full">
      {pending ? (
        <LoaderIcon className="w-4 h-4 animate-spin" />
      ) : (
        <CheckIcon className="w-4 h-4" />
      )}{" "}
      Place Order
    </Button>
  );
}
