import { Router } from "express";
import { FoldersController } from "./folders.controller";
import { asyncHandler } from "../../middlewares/async.middleware";

const router = Router();
const controller = new FoldersController();

router.post("/", asyncHandler(controller.create));
router.get("/", asyncHandler(controller.findAll));

export default router;
