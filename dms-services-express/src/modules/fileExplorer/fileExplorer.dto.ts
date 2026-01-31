import { Folders } from "../folders/folders.entity";

export type ExplorerItemTypeFlag = "F" | "D";

export interface ExplorerItemDto {
  id: string;
  name: string;
  itemTypeFlag: ExplorerItemTypeFlag;
  parentId?: string | null;
  createdAt: Date;
}
