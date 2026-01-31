export interface CreateFolderDto {
  name: string;
  parentId?: string | null;
  created_by: string;
}
