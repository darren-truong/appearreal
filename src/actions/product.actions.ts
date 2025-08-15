"use server";

import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";
import prisma from "@/lib/prisma";
import { convertToPlainObject } from "@/lib/utils";

// Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}
