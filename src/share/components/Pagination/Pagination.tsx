"use client";
import { Stack, Pagination } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
interface PaginationComponentProps {
  totalPages: number;
}
const PaginationComponent = ({ totalPages }: PaginationComponentProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  typeof window !== "undefined" &&
    window.localStorage.setItem("currentPage", currentPage.toString());

  useEffect(() => {
    if (currentPage === 1) {
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");
      const newUrl = `${pathname}?${params.toString()}`;
      router.push(newUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangePage = (
    event: React.ChangeEvent<unknown>,
    pageNumber: number
  ) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl);
  };

  return (
    <Stack pt={4} sx={{ alignItems: "center" }}>
      <Pagination
        count={totalPages}
        variant="outlined"
        color="primary"
        onChange={onChangePage}
        page={currentPage}
      />
    </Stack>
  );
};

export default PaginationComponent;
