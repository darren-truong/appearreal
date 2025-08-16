import { ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import Link from "next/link";
import UserButton from "./UserButton";

export default function Menu() {
  return (
    <div>
      <nav className="flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCartIcon /> Cart
          </Link>
        </Button>
        <UserButton />
      </nav>
    </div>
  );
}
