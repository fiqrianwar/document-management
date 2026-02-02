import { Router } from "express";
import { FileExplorerController } from "./file-explorer.controller";
import { asyncHandler } from "../../middlewares/async.middleware";

const router = Router();
const controller = new FileExplorerController();

router.get("/", asyncHandler(controller.findAll));

export default router;
