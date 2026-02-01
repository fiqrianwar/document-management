import { apiPath } from "@/constants/apiPath";
import { request } from "../requests";
import { TPayloadFolders, TResponsesFolders } from "./type";

export const foldersService = {
  create: (payload: Partial<TPayloadFolders>) =>
    request<TResponsesFolders>({
      url: apiPath.foldersApi,
      method: "POST",
      data: payload,
    }),
};
