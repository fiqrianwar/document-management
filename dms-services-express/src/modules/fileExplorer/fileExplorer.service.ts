import { AppDataSource } from "../../config/data-source";
import { Documents } from "../documents/documents.entity";
import { Folders } from "../folders/folders.entity";
import { ExplorerFilter, ExplorerItemDto } from "./fileExplorer.dto";
import { FindOptionsWhere, IsNull, Like } from "typeorm";

export class ExplorerService {
  async getByParent(filter: ExplorerFilter): Promise<ExplorerItemDto[]> {
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

    const folderItems: ExplorerItemDto[] = folders.map((f) => ({
      id: f.id,
      name: f.name,
      itemTypeFlag: "F",
      createdBy: f.createdBy,
      parentId: f.parentId,
      createdAt: f.createdAt,
    }));

    const documentItems: ExplorerItemDto[] = documents.map((d) => ({
      id: d.id,
      name: d.name,
      itemTypeFlag: "D",
      createdBy: d.createdBy,
      parentId: d.folderId,
      createdAt: d.createdAt,
    }));

    return [...folderItems, ...documentItems];
  }
}
