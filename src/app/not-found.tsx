"use client";

import Image from "next/image";
import { APP_NAME } from "../lib/constants";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        priority
      />
      <div className="flex w-1/3 flex-col items-center justify-center gap-2 rounded-lg p-6 shadow-md">
        <h1 className="text-3xl font-bold">Not found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button variant="outline" asChild>
          <Link href="/">Back To Home</Link>
        </Button>
      </div>
    </div>
  );
}
