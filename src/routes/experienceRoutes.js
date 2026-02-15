import express from "express";
import * as experienceController from "../controllers/experienceController.js";

const router = express.Router();

// Public routes
router.get("/", experienceController.getAllExperience);
router.get("/:id", experienceController.getExperienceById);

// Admin routes (to be protected with auth middleware later)
router.post("/", experienceController.createExperience);
router.put("/:id", experienceController.updateExperience);
router.delete("/:id", experienceController.deleteExperience);

export default router;
