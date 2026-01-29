import { Request, Response } from "express";
import { success } from "../../utils/responses";
import { CreateDocumentDto } from "./documents.dto";
import { DocumentService } from "./documents.service";

const service = new DocumentService();

export class DocumentController {
  create = async (req: Request<{}, {}, CreateDocumentDto>, res: Response) => {
    const doc = await service.create(req.body);
    return success(res, "Document created", doc, null, 201);
  };

  findAll = async (_: Request, res: Response) => {
    const docs = await service.findAll();
    return success(res, "Documents retrieved", docs, null, 200);
  };
}
