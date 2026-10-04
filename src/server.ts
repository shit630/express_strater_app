import express from "express";
import { serverConfig } from "./config/index.js";
import { pingRouter } from "./routers/ping.router.js";
import { genericErrorHandler } from "./middleware/error-handel.middleware.js";

const app = express();

app.use(express.json());
const PORT: number = serverConfig.PORT;

app.use("/v1", pingRouter);

//error handler middleware
app.use(genericErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
