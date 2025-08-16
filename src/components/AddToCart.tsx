"use client";

import { Cart, CartItem } from "@/lib/types";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { addItemToCart, removeItemFromCart } from "@/actions/cart.actions";
import { toast } from "sonner";
import { MinusIcon, PlusIcon } from "lucide-react";

export default function AddToCart({
  cart,
  item,
}: {
  cart?: Cart;
  item: CartItem;
}) {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    toast.success(`${res.message}`, {
      action: {
        label: "Go To Cart",
        onClick: () => router.push("/cart"),
      },
    });
  };

  // Handle remove from cart
  const handleRemoveFromCart = async () => {
    const res = await removeItemFromCart(item.productId);

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.warning(res.message);
    }

    return;
  };

  // Check if item is in cart
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button type="button" variant="outline" onClick={handleRemoveFromCart}>
        <MinusIcon className="h-4 w-4" />
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button type="button" variant="outline" onClick={handleAddToCart}>
        <MinusIcon className="h-4 w-4" />
      </Button>
    </div>
  ) : (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <PlusIcon />
      Add To Cart
    </Button>
  );
}
