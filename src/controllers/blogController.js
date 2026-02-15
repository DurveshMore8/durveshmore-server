import Blog from "../models/Blog.js";

// Get all published blogs
export const getAllBlogs = async (req, res) => {
  const { status, category, page = 1, limit = 10 } = req.query;
  const filter = {};

  if (status) filter.status = status;
  if (category) filter.category = category;

  const skip = (page - 1) * limit;
  const blogs = await Blog.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(Number(limit));

  const total = await Blog.countDocuments(filter);

  res.json({
    success: true,
    data: blogs,
    pagination: {
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
    },
  });
};

// Get blog by slug
export const getBlogBySlug = async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });
  if (!blog) {
    return res.status(404).json({ success: false, message: "Blog not found" });
  }

  // Increment views
  blog.views += 1;
  await blog.save();

  res.json({ success: true, data: blog });
};

// Get blog by ID
export const getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    return res.status(404).json({ success: false, message: "Blog not found" });
  }
  res.json({ success: true, data: blog });
};

// Create new blog (Admin)
export const createBlog = async (req, res) => {
  const { title, excerpt, content, category } = req.body;

  if (!title || !excerpt || !content || !category) {
    return res.status(400).json({
      success: false,
      message: "Title, excerpt, content, and category are required",
    });
  }

  const blog = new Blog(req.body);
  await blog.save();
  res.status(201).json({ success: true, data: blog });
};

// Update blog (Admin)
export const updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!blog) {
    return res.status(404).json({ success: false, message: "Blog not found" });
  }
  res.json({ success: true, data: blog });
};

// Delete blog (Admin)
export const deleteBlog = async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) {
    return res.status(404).json({ success: false, message: "Blog not found" });
  }
  res.json({ success: true, message: "Blog deleted successfully" });
};
