import { Request, Response } from "express";
import { success } from "../../utils/responses";
import { CreateFolderDto } from "./folders.dto";
import { FoldersService } from "./folders.service";
import {
  SUCCESS_CREATED_FOLDER,
  SUCCESS_RETRIEVED_FOLDERS,
} from "../../constants/messages";

const service = new FoldersService();

export class FoldersController {
  create = async (req: Request<{}, {}, CreateFolderDto>, res: Response) => {
    const folders = await service.create(req.body);
    return success(res, SUCCESS_CREATED_FOLDER, folders, null, 201);
  };

  findAll = async (_: Request, res: Response) => {
    const folders = await service.findAll();
    return success(res, SUCCESS_RETRIEVED_FOLDERS, folders, null, 200);
  };
}
