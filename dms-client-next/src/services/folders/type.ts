import { ApiResponse } from "../type";

export type TPayloadFolders = {
  name: string;
  createdBy: string;
  parentId?: string | null;
};

export type TItemDocuments = {
  id: string;
  name: string;
  createdBy: string;
  createdAt: string;
  folderId: string;
  documentType: string;
  itemTypeFlag: string;
};

export type TItemFolders = {
  id: string;
  name: string;
  createdBy: string;
  createdAt: string;
  folderId: string;
  parentId: string;
  itemTypeFlag: string;
  children?: Array<{
    id: string;
    name: string;
    createdBy: string;
    createdAt: string;
    folderId: string;
    parentId: string;
    itemTypeFlag: string;
  }>;
  documents?: Array<TItemDocuments>;
};

export type TResponsesFolders = ApiResponse<TItemFolders[]>;
