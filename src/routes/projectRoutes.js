import express from "express";
import * as projectController from "../controllers/projectController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getProjectById);

// Admin routes (protected)
router.post("/", protect, projectController.createProject);
router.put("/:id", protect, projectController.updateProject);
router.delete("/:id", protect, projectController.deleteProject);

export default router;
