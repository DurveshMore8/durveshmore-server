import express from "express";
import * as skillController from "../controllers/skillController.js";

const router = express.Router();

// Public routes
router.get("/", skillController.getAllSkills);
router.get("/categories", skillController.getSkillCategories);
router.get("/:id", skillController.getSkillById);

// Admin routes (to be protected with auth middleware later)
router.post("/", skillController.createSkill);
router.put("/:id", skillController.updateSkill);
router.delete("/:id", skillController.deleteSkill);

export default router;
