import { AppDataSource } from "../../config/data-source";
import { Documents } from "./documents.entity";

export const documentRepository = AppDataSource.getRepository(Documents);
