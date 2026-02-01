import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { TResponsesFileExplorer } from "./type";
import { apiPath } from "@/constants/apiPath";

export const fileExplorerService = {};

export const useFetchFileExplorer = (
  parentId: string | null,
  search?: string,
) => {
  const params = new URLSearchParams();

  if (parentId !== null) params.set("parentId", parentId);
  if (search) params.set("search", search);

  const urlKey = `${apiPath.fileExplorerApi}?${params.toString()}`;

  return useSWR<TResponsesFileExplorer>(urlKey, fetcher, {
    keepPreviousData: true,
  });
};
