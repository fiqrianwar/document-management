import { Router } from "express";
import { DocumentController } from "./documents.controller";
import { asyncHandler } from "../../middlewares/async.middleware";

const router = Router();
const controller = new DocumentController();

router.post("/", asyncHandler(controller.create));
router.get("/", asyncHandler(controller.findAll));

export default router;
