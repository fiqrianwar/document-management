import { Folders } from "./folders.entity";

export interface CreateFolderDto {
  name: string;
  parentId?: string | null;
}
