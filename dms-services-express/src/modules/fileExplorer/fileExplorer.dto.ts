import { Folders } from "../folders/folders.entity";

export type ExplorerQuery = {
  parentId?: string | string[];
  search?: string | string[];
};

export type ExplorerFilter = {
  parentId: string | null;
  search?: string;
};

export type ExplorerItemTypeFlag = "F" | "D";

export interface ExplorerItemDto {
  id: string;
  name: string;
  itemTypeFlag: ExplorerItemTypeFlag;
  createdBy: string;
  parentId?: string | null;
  createdAt: Date;
}
