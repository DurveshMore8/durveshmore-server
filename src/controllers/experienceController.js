import Experience from "../models/Experience.js";

// Get all experience
export const getAllExperience = async (req, res) => {
  const experience = await Experience.find().sort({ startDate: -1, order: 1 });
  res.json({ success: true, data: experience });
};

// Get single experience by ID
export const getExperienceById = async (req, res) => {
  const experience = await Experience.findById(req.params.id);
  if (!experience) {
    return res.status(404).json({ success: false, message: "Experience not found" });
  }
  res.json({ success: true, data: experience });
};

// Create new experience (Admin)
export const createExperience = async (req, res) => {
  const { title, company, startDate } = req.body;

  if (!title || !company || !startDate) {
    return res.status(400).json({
      success: false,
      message: "Title, company, and startDate are required",
    });
  }

  const experience = new Experience(req.body);
  await experience.save();
  res.status(201).json({ success: true, data: experience });
};

// Update experience (Admin)
export const updateExperience = async (req, res) => {
  const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!experience) {
    return res.status(404).json({ success: false, message: "Experience not found" });
  }
  res.json({ success: true, data: experience });
};

// Delete experience (Admin)
export const deleteExperience = async (req, res) => {
  const experience = await Experience.findByIdAndDelete(req.params.id);
  if (!experience) {
    return res.status(404).json({ success: false, message: "Experience not found" });
  }
  res.json({ success: true, message: "Experience deleted successfully" });
};
