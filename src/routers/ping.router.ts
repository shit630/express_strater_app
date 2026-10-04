import express from "express";
import { pingHandler } from "../controller/ping.controller.js";
import { validatorRequestBody } from "../validator/index.js";
import { pingSchema } from "../validator/ping.validator.js";

export const pingRouter = express.Router();

pingRouter.get("/ping", validatorRequestBody(pingSchema), pingHandler);
