import { getOrderById } from "@/actions/order.actions";
import { auth } from "@/auth";
import OrderDetailsTable from "@/components/OrderDetailsTable";
import { ShippingAddress } from "@/lib/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Order Details",
};

export default async function OrderDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const order = await getOrderById(id);

  if (!order) notFound();

  const session = await auth();

  return (
    <OrderDetailsTable
      order={{
        ...order,
        shippingAddress: order.shippingAddress as ShippingAddress,
      }}
      paypalClientId={process.env.PAYPAL_CLIENT_ID || "sb"}
      isAdmin={session?.user?.role === "admin" || false}
    />
  );
}
