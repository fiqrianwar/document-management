import { AppDataSource } from "../../config/data-source";
import { FileTypeFlag } from "../../constants/enums";
import { Helper } from "../../utils/helper";
import { Documents } from "../documents/documents.entity";
import { Folders } from "../folders/folders.entity";
import { FileExplorerFilter, FileExplorerItemDto } from "./file-explorer.dto";
import { FindOptionsWhere, IsNull, Like } from "typeorm";

export class FileExplorerService {
  async getByParent(
    filter: FileExplorerFilter,
  ): Promise<FileExplorerItemDto[]> {
    const folderRepo = AppDataSource.getRepository(Folders);
    const documentRepo = AppDataSource.getRepository(Documents);

    const { parentId, search } = filter;

    const folderWhere: FindOptionsWhere<Folders> = {
      parentId: parentId ?? IsNull(),
    };

    const documentWhere: FindOptionsWhere<Documents> = {
      folderId: parentId ?? IsNull(),
    };

    if (search) {
      folderWhere.name = Like(`%${search}%`);
      documentWhere.name = Like(`%${search}%`);
    }

    const folders = await folderRepo.find({
      where: folderWhere,
      order: { createdAt: "ASC" },
    });

    const documents = await documentRepo.find({
      where: documentWhere,
      order: { createdAt: "ASC" },
    });

    const folderItems: FileExplorerItemDto[] = folders.map((f) => ({
      id: f.id,
      name: f.name,
      itemTypeFlag: FileTypeFlag.FOLDER,
      createdBy: f.createdBy,
      parentId: f.parentId,
      createdAt: Helper.formatDate(f.createdAt, "dd_MMM_yyyy"),
    }));

    const documentItems: FileExplorerItemDto[] = documents.map((d) => {
      const formattedName = d.name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("_");

      const combined = `${Helper.formatDate(d.createdAt, "yyyy_mm_dd")}_${formattedName}.${d.documentType}`;

      return {
        id: d.id,
        name: combined,
        itemTypeFlag: FileTypeFlag.DOCUMENT,
        createdBy: d.createdBy,
        parentId: d.folderId,
        createdAt: Helper.formatDate(d.createdAt, "dd_MMM_yyyy"),
      };
    });

    return [...folderItems, ...documentItems];
  }
}
