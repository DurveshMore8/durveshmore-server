import express from "express";
import * as blogController from "../controllers/blogController.js";

const router = express.Router();

// Public routes
router.get("/", blogController.getAllBlogs);
router.get("/slug/:slug", blogController.getBlogBySlug);
router.get("/:id", blogController.getBlogById);

// Admin routes (to be protected with auth middleware later)
router.post("/", blogController.createBlog);
router.put("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);

export default router;
