import { Response } from "express";

export function success<T>(
  res: Response,
  message: string,
  data?: T,
  meta?: any,
  statusCode = 200,
) {
  return res.status(statusCode).json({
    success: true,
    message,
    statusCode,
    data,
    ...(meta && { meta }),
  });
}
