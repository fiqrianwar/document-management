import { AppDataSource } from "../../config/data-source";
import { Folders } from "./folders.entity";

export const foldersRepository = AppDataSource.getRepository(Folders);
