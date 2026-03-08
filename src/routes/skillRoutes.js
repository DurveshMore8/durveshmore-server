import express from "express";
import * as skillController from "../controllers/skillController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", skillController.getAllSkills);
router.get("/categories", skillController.getSkillCategories);
router.get("/:id", skillController.getSkillById);

// Admin routes (protected)
router.post("/", protect, skillController.createSkill);
router.put("/:id", protect, skillController.updateSkill);
router.delete("/:id", protect, skillController.deleteSkill);

export default router;
