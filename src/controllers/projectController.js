import Project from "../models/Project.js";

// Get all projects
export const getAllProjects = async (req, res) => {
  const { status, featured } = req.query;
  const filter = {};

  if (status) filter.status = status;
  if (featured !== undefined) filter.featured = featured === "true";

  const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 });
  res.json({ success: true, data: projects });
};

// Get single project by ID
export const getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return res.status(404).json({ success: false, message: "Project not found" });
  }
  res.json({ success: true, data: project });
};

// Create new project (Admin)
export const createProject = async (req, res) => {
  const { title, description, technologies, image, github, demo } = req.body;

  if (!title || !description || !image) {
    return res.status(400).json({
      success: false,
      message: "Title, description, and image are required",
    });
  }

  const project = new Project(req.body);
  await project.save();
  res.status(201).json({ success: true, data: project });
};

// Update project (Admin)
export const updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!project) {
    return res.status(404).json({ success: false, message: "Project not found" });
  }
  res.json({ success: true, data: project });
};

// Delete project (Admin)
export const deleteProject = async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    return res.status(404).json({ success: false, message: "Project not found" });
  }
  res.json({ success: true, message: "Project deleted successfully" });
};
