import express from "express";
import { getMask } from "./mask.controller";

const router = express.Router();

router.get("/", getMask);

export default router;
