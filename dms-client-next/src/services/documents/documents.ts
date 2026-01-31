import { request } from "../requests";
import { TPayloadDocuments, TResponsesDocuments } from "./type";

export const documentsService = {
  getAll: () =>
    request<TResponsesDocuments>({
      url: "/documents",
      method: "GET",
    }),

  create: (payload: Partial<TPayloadDocuments>) =>
    request<TResponsesDocuments>({
      url: "/documents",
      method: "POST",
      data: payload,
    }),
};
