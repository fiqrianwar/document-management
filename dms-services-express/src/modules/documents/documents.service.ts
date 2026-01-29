import { CreateDocumentDto } from "./documents.dto";
import { documentRepository } from "./documents.repository";

export class DocumentService {
  async create(data: CreateDocumentDto) {
    const doc = documentRepository.create(data);
    return documentRepository.save(doc);
  }

  async findAll() {
    return documentRepository.find({
      order: { createdAt: "DESC" },
    });
  }
}
