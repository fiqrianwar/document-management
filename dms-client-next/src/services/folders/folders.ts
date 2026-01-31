import { request } from "../requests";
import { TPayloadFolders, TResponsesFolders } from "./type";

export const foldersService = {
  create: (payload: Partial<TPayloadFolders>) =>
    request<TResponsesFolders>({
      url: "/folders",
      method: "POST",
      data: payload,
    }),
};
