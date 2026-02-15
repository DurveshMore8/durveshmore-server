import Skill from "../models/Skill.js";

// Get all skills
export const getAllSkills = async (req, res) => {
  const { category, featured } = req.query;
  const filter = {};

  if (category) filter.category = category;
  if (featured !== undefined) filter.featured = featured === "true";

  const skills = await Skill.find(filter).sort({ order: 1, category: 1 });
  res.json({ success: true, data: skills });
};

// Get skill by ID
export const getSkillById = async (req, res) => {
  const skill = await Skill.findById(req.params.id);
  if (!skill) {
    return res.status(404).json({ success: false, message: "Skill not found" });
  }
  res.json({ success: true, data: skill });
};

// Create new skill (Admin)
export const createSkill = async (req, res) => {
  const { name, category } = req.body;

  if (!name || !category) {
    return res.status(400).json({
      success: false,
      message: "Name and category are required",
    });
  }

  const skill = new Skill(req.body);
  await skill.save();
  res.status(201).json({ success: true, data: skill });
};

// Update skill (Admin)
export const updateSkill = async (req, res) => {
  const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!skill) {
    return res.status(404).json({ success: false, message: "Skill not found" });
  }
  res.json({ success: true, data: skill });
};

// Delete skill (Admin)
export const deleteSkill = async (req, res) => {
  const skill = await Skill.findByIdAndDelete(req.params.id);
  if (!skill) {
    return res.status(404).json({ success: false, message: "Skill not found" });
  }
  res.json({ success: true, message: "Skill deleted successfully" });
};

// Get skill categories
export const getSkillCategories = async (req, res) => {
  const categories = await Skill.distinct("category");
  res.json({ success: true, data: categories });
};
