"use client";

import { createOrder } from "@/actions/order.actions";
import { useRouter } from "next/navigation";
import PlaceOrderButton from "./PlaceOrderButton";

export default function PlaceOrderForm() {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const res = await createOrder();

    if (res.redirectTo) {
      router.push(res.redirectTo);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <PlaceOrderButton />
    </form>
  );
}
