import { Folders } from "../folders/folders.entity";

export interface CreateDocumentDto {
  name: string;
  folderId?: string | null;
  createdBy: string;
  documentType: string;
}
