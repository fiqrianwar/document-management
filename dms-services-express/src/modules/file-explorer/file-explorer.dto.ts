export type FileExplorerQuery = {
  parentId?: string | string[];
  search?: string | string[];
};

export type FileExplorerFilter = {
  parentId: string | null;
  search?: string;
};

export type FileExplorerItemTypeFlag = "F" | "D";

export interface FileExplorerItemDto {
  id: string;
  name: string;
  itemTypeFlag: FileExplorerItemTypeFlag;
  createdBy: string;
  parentId?: string | null;
  createdAt: string;
}
