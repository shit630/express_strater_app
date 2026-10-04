import type { NextFunction, Request, Response } from "express";
import type { z } from "zod";

export const validatorRequestBody = (schema: z.ZodType) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      console.log("Request body is validate");
      next();
    } catch (error) {
      res.status(400).json({
        message: "Invalid request body",
        success: false
      })
    }
  };
};
