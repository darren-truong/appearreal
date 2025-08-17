"use client";

import { Cart, CartItem } from "@/lib/types";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { addItemToCart, removeItemFromCart } from "@/actions/cart.actions";
import { toast } from "sonner";
import { LoaderIcon, MinusIcon, PlusIcon } from "lucide-react";
import { useTransition } from "react";

export default function AddToCart({
  cart,
  item,
}: {
  cart?: Cart;
  item: CartItem;
}) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleAddToCart = async () => {
    startTransition(async () => {
      const res = await addItemToCart(item);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      // Handle success add to cart
      toast.success(`${res.message}`, {
        action: {
          label: "Go To Cart",
          onClick: () => router.push("/cart"),
        },
      });
    });
  };

  // Handle remove from cart
  const handleRemoveFromCart = async () => {
    startTransition(async () => {
      const res = await removeItemFromCart(item.productId);

      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }

      return;
    });
  };

  // Check if item is in cart
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button type="button" variant="outline" onClick={handleRemoveFromCart}>
        {isPending ? (
          <LoaderIcon className="h-4 w-4 animate-spin" />
        ) : (
          <MinusIcon className="h-4 w-4" />
        )}
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button type="button" variant="outline" onClick={handleAddToCart}>
        {isPending ? (
          <LoaderIcon className="h-4 w-4 animate-spin" />
        ) : (
          <MinusIcon className="h-4 w-4" />
        )}
      </Button>
    </div>
  ) : (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      {isPending ? (
        <LoaderIcon className="h-4 w-4 animate-spin" />
      ) : (
        <PlusIcon />
      )}
      Add To Cart
    </Button>
  );
}
