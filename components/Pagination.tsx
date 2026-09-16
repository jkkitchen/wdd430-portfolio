"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    const createPageURL = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());

        return `${pathname}?${params.toString()}`;
    };

    const hasPrevious = currentPage > 1;
    const hasNext = currentPage < totalPages;

    return (
      <div>
        {hasPrevious && (
          <Link
            href={createPageURL(currentPage - 1)}
            className="text-blue-500 hover:underline"
          >
            Previous
          </Link>
        )}

        {hasNext && (
          <Link
            href={createPageURL(currentPage + 1)}
            className="text-blue-500 hover:underline"
          >
            Next
          </Link>
        )}
      </div>
    );
}
