import { apiPath } from "@/constants/apiPath";
import { request } from "../requests";
import { TPayloadDocuments, TResponsesDocuments } from "./type";

export const documentsService = {
  getAll: () =>
    request<TResponsesDocuments>({
      url: apiPath.documentsApi,
      method: "GET",
    }),

  create: (payload: Partial<TPayloadDocuments>) =>
    request<TResponsesDocuments>({
      url: apiPath.documentsApi,
      method: "POST",
      data: payload,
    }),
};
