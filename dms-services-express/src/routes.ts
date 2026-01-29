import { Router } from "express";
import documentsRoutes from "./modules/documents/documents.route";

const router = Router();

router.use("/documents", documentsRoutes);

export default router;
