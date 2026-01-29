import { Request, Response } from "express";
import { success } from "../../utils/responses";
import { CreateFolderDto } from "./folders.dto";
import { FoldersService } from "./folders.service";

const service = new FoldersService();

export class FoldersController {
  create = async (req: Request<{}, {}, CreateFolderDto>, res: Response) => {
    const folders = await service.create(req.body);
    return success(res, "Folders created", folders, null, 201);
  };

  findAll = async (_: Request, res: Response) => {
    const folders = await service.findAll();
    return success(res, "Folders retrieved", folders, null, 200);
  };
}
