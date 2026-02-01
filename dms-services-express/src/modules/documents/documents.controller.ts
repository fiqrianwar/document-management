import { Request, Response } from "express";
import { success } from "../../utils/responses";
import { CreateDocumentDto } from "./documents.dto";
import { DocumentService } from "./documents.service";
import {
  SUCCESS_CREATED_DOCUMENT,
  SUCCESS_RETRIEVED_DOCUMENT,
} from "../../constants/messages";

const service = new DocumentService();

export class DocumentController {
  create = async (req: Request<{}, {}, CreateDocumentDto>, res: Response) => {
    const doc = await service.create(req.body);
    return success(res, SUCCESS_CREATED_DOCUMENT, doc, null, 201);
  };

  findAll = async (_: Request, res: Response) => {
    const docs = await service.findAll();
    return success(res, SUCCESS_RETRIEVED_DOCUMENT, docs, null, 200);
  };
}
