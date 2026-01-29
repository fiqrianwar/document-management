import { Router } from "express";
import documentsRoutes from "./modules/documents/documents.route";
import foldersRoutes from "./modules/folders/folders.route";

const router = Router();

router.use("/documents", documentsRoutes);
router.use("/folders", foldersRoutes);

export default router;
