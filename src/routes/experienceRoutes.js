import express from "express";
import * as experienceController from "../controllers/experienceController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", experienceController.getAllExperience);
router.get("/:id", experienceController.getExperienceById);

// Admin routes (protected)
router.post("/", protect, experienceController.createExperience);
router.put("/:id", protect, experienceController.updateExperience);
router.delete("/:id", protect, experienceController.deleteExperience);

export default router;
