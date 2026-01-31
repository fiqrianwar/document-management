import { Request, Response } from "express";
import { success } from "../../utils/responses";
import { ExplorerService } from "./fileExplorer.service";

const service = new ExplorerService();

type ExplorerQuery = {
  parentId?: string;
};

export class FileExplorerController {
  findAll = async (req: Request<{}, {}, {}, ExplorerQuery>, res: Response) => {
    const parentId =
      !req.query.parentId || req.query.parentId === "null"
        ? null
        : req.query.parentId;

    const items = await service.getByParent(parentId);

    return success(res, "File Explorer retrieved", items, null, 200);
  };
}
