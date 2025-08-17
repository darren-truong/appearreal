import { getUserById } from "@/actions/user.actions";
import { auth } from "@/auth";
import PaymentMethodForm from "@/components/PaymentMethodForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Select Payment Method",
};

export default async function PaymentMethodPage() {
  const session = await auth();

  const userId = session?.user?.id;

  if (!userId) throw new Error("User not found");

  const user = await getUserById(userId);

  return (
    <>
      <PaymentMethodForm preferredPaymentMethod={user.paymentMethod} />
    </>
  );
}
