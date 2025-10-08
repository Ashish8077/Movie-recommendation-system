import { Router } from "express";
import { getRecommendation } from "../controllers/recommendation.controller.js";

const router = Router();

router.post("/recommendation", getRecommendation);


export default router;
