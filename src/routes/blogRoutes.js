import express from "express";
import * as blogController from "../controllers/blogController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", blogController.getAllBlogs);
router.get("/slug/:slug", blogController.getBlogBySlug);
router.get("/:id", blogController.getBlogById);

// Admin routes (protected)
router.post("/", protect, blogController.createBlog);
router.put("/:id", protect, blogController.updateBlog);
router.delete("/:id", protect, blogController.deleteBlog);

export default router;
