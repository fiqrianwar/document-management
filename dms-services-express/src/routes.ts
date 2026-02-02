import { Router } from "express";
import documentsRoutes from "./modules/documents/documents.route";
import foldersRoutes from "./modules/folders/folders.route";
import fileExplorerRoutes from "./modules/file-explorer/file-explorer.route";

const router = Router();

router.use("/documents", documentsRoutes);
router.use("/folders", foldersRoutes);
router.use("/file-explorer", fileExplorerRoutes);

export default router;
