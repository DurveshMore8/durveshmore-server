import express from "express";
import * as projectController from "../controllers/projectController.js";

const router = express.Router();

// Public routes
router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getProjectById);

// Admin routes (to be protected with auth middleware later)
router.post("/", projectController.createProject);
router.put("/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteProject);

export default router;
