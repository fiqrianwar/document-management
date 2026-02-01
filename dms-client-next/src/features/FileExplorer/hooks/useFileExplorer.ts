import { useState } from "react";
import { useFetchFileExplorer } from "@/services/fileExplorer/fileExplorer";
import useDebounce from "@/hooks/useDebounce";

export const useFileExplorer = (folderPath?: string) => {
  const [search, setSearch] = useState("");
  const debouncedQuery = useDebounce(search, 300);

  const { data, isLoading, error } = useFetchFileExplorer(
    folderPath ?? null,
    debouncedQuery,
  );

  return {
    search,
    setSearch,
    data,
    isLoading,
    error,
  };
};
