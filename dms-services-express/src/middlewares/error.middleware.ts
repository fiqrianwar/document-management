import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app-error";
import { INTERNAL_SERVER_ERROR } from "../constants/messages";

export function errorMiddleware(
  err: Error,
  _: Request,
  res: Response,
  __: NextFunction,
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errorCode: err.errorCode,
    });
  }

  console.error(err);

  return res.status(500).json({
    success: false,
    message: INTERNAL_SERVER_ERROR,
  });
}
