import express from "express";
import mask from "./mask";
const router = express.Router();

router.use("/mask", mask);

export default router;
