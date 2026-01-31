import { ApiResponse } from "../type";

export type TItemFileExplorer = {
  id: string;
  name: string;
  createdBy: string;
  createdAt: string;
  parentId: string | null;
  itemTypeFlag: "F" | "D";
};

export type TResponsesFileExplorer = ApiResponse<TItemFileExplorer[]>;
