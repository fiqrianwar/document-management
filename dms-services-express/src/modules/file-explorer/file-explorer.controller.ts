import { Request, Response } from "express";
import { success } from "../../utils/responses";
import { FileExplorerService } from "./file-explorer.service";
import { FileExplorerQuery } from "./file-explorer.dto";
import { SUCCESS_RETRIEVED_FILE_EXPLORER } from "../../constants/messages";

const service = new FileExplorerService();

export class FileExplorerController {
  findAll = async (
    req: Request<{}, {}, {}, FileExplorerQuery>,
    res: Response,
  ) => {
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

    return success(res, SUCCESS_RETRIEVED_FILE_EXPLORER, items, null, 200);
  };
}
