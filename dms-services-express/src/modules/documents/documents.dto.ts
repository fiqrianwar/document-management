import { Folders } from "../folders/folders.entity";

export interface CreateDocumentDto {
  name: string;
  folderId?: Folders | null;
  createdBy: string;
}
