import { ApiResponse } from "../type";

export type TItemFolders = {
  id: string;
  name: string;
  createdAt: string;
};

export type TItemDocuments = {
  id: string;
  name: string;
  createdBy: string;
  createdAt: string;
  folderId: TItemFolders | null;
};

export type TPayloadDocuments = {
  name: string;
  createdBy: string;
};

export type TResponsesDocuments = ApiResponse<TItemDocuments[]>;
