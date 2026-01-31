import { Request, Response } from "express";
import { success } from "../../utils/responses";
import { ExplorerService } from "./fileExplorer.service";
import { ExplorerQuery } from "./fileExplorer.dto";

const service = new ExplorerService();

export class FileExplorerController {
  findAll = async (req: Request<{}, {}, {}, ExplorerQuery>, res: Response) => {
    const normalize = (v?: string | string[]) =>
      !v ? undefined : Array.isArray(v) ? v[0] : v;

    const rawParentId = normalize(req.query.parentId);
    const search = normalize(req.query.search);

    const parentId =
      !rawParentId || rawParentId === "null" ? null : rawParentId;

    const items = await service.getByParent({
      parentId,
      search,
    });

    return success(res, "File Explorer retrieved", items, null, 200);
  };
}
