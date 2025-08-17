import { getMyCart } from "@/actions/cart.actions";
import { getUserById } from "@/actions/user.actions";
import { auth } from "@/auth";
import ShippingAddressForm from "@/components/ShippingAddressForm";
import { ShippingAddress } from "@/lib/types";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Shipping Address",
};

export default async function ShippingAddressPage() {
  const cart = await getMyCart();

  if (!cart || cart.items.length === 0) redirect("/cart");

  const session = await auth();

  const userId = session?.user?.id;

  if (!userId) throw new Error("No user ID");

  const user = await getUserById(userId);

  return (
    <>
      <ShippingAddressForm address={user.address as ShippingAddress} />
    </>
  );
}
