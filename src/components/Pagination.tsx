"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

type PaginationProps = {
  page: number | string;
  totalPages: number;
  urlParamName?: string;
};

export default function Pagination({
  page,
  totalPages,
  urlParamName,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handlePagination = (btnType: "next" | "prev") => {
    const currPage = btnType === "next" ? Number(page) + 1 : Number(page) - 1;

    const params = new URLSearchParams(searchParams);
    params.set(urlParamName || "page", currPage.toString());

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-2">
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        disabled={Number(page) <= 1}
        onClick={() => handlePagination("prev")}
      >
        Previous
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        disabled={Number(page) >= totalPages}
        onClick={() => handlePagination("next")}
      >
        Next
      </Button>
    </div>
  );
}
