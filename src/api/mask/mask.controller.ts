import express from "express";
import axios from "axios";
import { MarkerDataProps } from "./mask";
import logger from "../../loaders/logger";

export type QueryData = {
  west?: number;
  east?: number;
  south?: number;
  north?: number;
};

export async function getMask(req: express.Request, res: express.Response) {
  // Return all image data it has
  try {
    const { west, east, south, north } = req.query as QueryData;
    logger.info("MaskQuery: ", west, east, south, north);
    if (!west || !east || !south || !north) {
      throw Error("Invalid Query Params");
    }

    const result = await axios.get<MarkerDataProps[]>(
      `http://api.adrinerdp.co/getSpots?lon1=${west}&lon2=${east}&lat1=${south}&lat2=${north}&fbclid=IwAR0XsBPeHqlpwN-LpR0IclJEitT0rBUGeDM9DcyvTe3N6MgDlQSho666ev0`
    );
    res.json(result.data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
