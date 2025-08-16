"use client";

import { CartItem } from "@/lib/types";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { addItemToCart } from "@/actions/cart.actions";
import { toast } from "sonner";
import { PlusIcon } from "lucide-react";

export default function AddToCart({ item }: { item: CartItem }) {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    toast.success(`${item.name} added to cart`, {
      action: {
        label: "Go To Cart",
        onClick: () => router.push("/cart"),
      },
    });
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <PlusIcon />
      Add To Cart
    </Button>
  );
}
