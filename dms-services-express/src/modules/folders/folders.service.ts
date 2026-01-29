import { CreateFolderDto } from "./folders.dto";
import { foldersRepository } from "./folders.repository";

export class FoldersService {
  async create(data: CreateFolderDto) {
    const folder = foldersRepository.create(data);
    return foldersRepository.save(folder);
  }

  async findAll() {
    return foldersRepository.find({
      order: { createdAt: "DESC" },
    });
  }
}
