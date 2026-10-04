import type { NextFunction, Request, Response } from "express";
import fs from "fs/promises";
import { NotFoundError } from "../utils/error/app.error.js";

export const pingHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    await fs.readFile("./sample.txt", "utf-8");
    res.status(200).json({
      message: "Pong",
      success: true,
    });
  } catch (error) {
    throw new NotFoundError("File not found");
  }
};
