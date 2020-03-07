import expressLoader from "./express";
import { Application } from "express";
import logger from "./logger";

export default (app: Application) => {
  expressLoader(app);
  logger.info("🔥  Express Server is prepared");

  return app;
};
