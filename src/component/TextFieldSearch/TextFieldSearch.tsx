"use client";
import { useDebouncedCallback } from "@/hooks/useDeboundCallback";
import SearchIcon from "@/icons/SearchIcon";
import { InputAdornment, TextField } from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const debounceTime = 500;

const TextFieldSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const searchFieldText =
    typeof window !== "undefined" && window.localStorage.getItem("searchText");

  const [searchValue, setSearchValue] = useState(
    searchFieldText ? searchFieldText : ""
  );

  useEffect(() => {
    if (searchFieldText) {
      const params = new URLSearchParams(searchParams);
      params.set("searchtext", searchValue);
      const url = `${pathname}?${params.toString()}`;
      router.push(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchFieldText, pathname, router, searchParams]);

  const onSearchTextChange = useDebouncedCallback((value: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    typeof window !== "undefined" &&
      window.localStorage.setItem("searchText", searchValue);
    const params = new URLSearchParams(searchParams);
    params.set("searchtext", value);
    const url = `${pathname}?${params.toString()}`;
    router.push(url);
  }, debounceTime);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTextChange(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <div>
      <TextField
        fullWidth
        id="search"
        value={searchValue}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        placeholder="Search for anything"
        onChange={handleChange}
      />
    </div>
  );
};

export default TextFieldSearch;
