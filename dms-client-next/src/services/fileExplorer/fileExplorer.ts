import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { TResponsesFileExplorer } from "./type";

export const fileExplorerService = {};

export const useFetchFileExplorer = (parentId: string | null) => {
  const urlKey = parentId
    ? `/fileExplorer?parentId=${parentId}`
    : `/fileExplorer`;

  return useSWR<TResponsesFileExplorer>(urlKey, fetcher);
};
