import { ItemTypeFlag } from "@/constants/enum";
import { ApiResponse } from "../type";

export type TItemFileExplorer = {
  id: string;
  name: string;
  createdBy: string;
  createdAt: string;
  parentId: string | null;
  itemTypeFlag: ItemTypeFlag.FOLDERS | ItemTypeFlag.DOCUMENTS;
};

export type TResponsesFileExplorer = ApiResponse<TItemFileExplorer[]>;
