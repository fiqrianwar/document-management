import { AppDataSource } from "../../config/data-source";
import { Documents } from "../documents/documents.entity";
import { Folders } from "../folders/folders.entity";
import { ExplorerItemDto } from "./fileExplorer.dto";
import { IsNull } from "typeorm";

export class ExplorerService {
  async getByParent(parentId: string | null): Promise<ExplorerItemDto[]> {
    const folderRepo = AppDataSource.getRepository(Folders);
    const documentRepo = AppDataSource.getRepository(Documents);

    const folders = await folderRepo.find({
      where: parentId ? { parentId } : { parentId: IsNull() },
      order: { createdAt: "ASC" },
    });

    const documents = await documentRepo.find({
      where: parentId ? { folderId: parentId } : { folderId: IsNull() },
      order: { createdAt: "ASC" },
    });

    const folderItems: ExplorerItemDto[] = folders.map((f) => ({
      id: f.id,
      name: f.name,
      itemTypeFlag: "F",
      parentId: f.parentId,
      createdAt: f.createdAt,
    }));

    const documentItems: ExplorerItemDto[] = documents.map((d) => ({
      id: d.id,
      name: d.name,
      itemTypeFlag: "D",
      parentId: d.folderId,
      createdAt: d.createdAt,
    }));

    return [...folderItems, ...documentItems];
  }
}
