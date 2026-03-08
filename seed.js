import dotenv from "dotenv";
import mongoose from "mongoose";
import Blog from "./src/models/Blog.js";
import Project from "./src/models/Project.js";
import Skill from "./src/models/Skill.js";

dotenv.config();

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio-cms",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log("✓ MongoDB connected for seeding");

    // Clear existing data
    await Project.deleteMany({});
    await Blog.deleteMany({});
    await Skill.deleteMany({});
    console.log("✓ Cleared existing data");

    // Sample Projects
    const projects = [
      {
        title: "Enigma Notepad",
        description:
          "EnigmaNotepad lets you store sensitive information like keys, secrets, and notes securely—encrypted and accessible only by you.",
        technologies: ["Next.js", "Tailwind CSS", "MongoDB", "AES Encryption"],
        image: "/project-images/enigma-notepad.png",
        github: "https://github.com/DurveshMore8/enigmanotepad",
        demo: "https://enigmanotepad.vercel.app/",
        featured: true,
        status: "published",
        order: 1,
      },
      {
        title: "AI Interview Platform",
        description:
          "An AI-powered interview preparation platform that simulates real interview scenarios and provides feedback on performance.",
        technologies: [
          "React",
          "NextJS",
          "Tailwind CSS",
          "Node.js",
          "PostgreSQL",
        ],
        image: "/project-images/ai-interview-platform.png",
        github: "https://github.com/DurveshMore8/interview-bot",
        demo: "https://interview-bot-beta.vercel.app/",
        featured: true,
        status: "published",
        order: 2,
      },
      {
        title: "Bloglane",
        description:
          "A beautiful blog platform with responsive design, content management, and user engagement features.",
        technologies: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "Node.js",
          "MongoDB",
        ],
        image: "/project-images/bloglane.png",
        github: "https://github.com/DurveshMore8/Bloglane",
        demo: "https://bloglane.vercel.app/",
        featured: true,
        status: "published",
        order: 3,
      },
      {
        title: "Todo App",
        description:
          "A simple and efficient todo application with task management, due dates, and progress tracking.",
        technologies: ["React"],
        image: "/project-images/todo-app.png",
        github: "https://github.com/DurveshMore8/TodoApp",
        demo: "https://todo-app-inky-eta.vercel.app/",
        featured: false,
        status: "published",
        order: 4,
      },
      {
        title: "Weather App",
        description:
          "A comprehensive weather application with real-time data, forecasts, and location-based services.",
        technologies: ["React"],
        image: "/project-images/weather-app.png",
        github: "https://github.com/DurveshMore8/WeatherApp",
        demo: "https://weather-app-seven-vert-88.vercel.app/",
        featured: false,
        status: "published",
        order: 5,
      },
      {
        title: "E-Commerce Platform",
        description:
          "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        image:
          "https://images.unsplash.com/photo-1460925895917-adf4e5e3a65f?w=500&h=300&fit=crop",
        github: "#",
        demo: "#",
        featured: false,
        status: "published",
        order: 6,
      },
    ];

    // Sample Blog Posts
    const blogs = [
      {
        title:
          "Mastering SOLID Principles: The Foundation of Clean Software Design",
        excerpt:
          "Introduction: Writing clean and maintainable code is not only an excellent habit but also a fundamental skill for...",
        content:
          "Full article content about SOLID principles and clean software design practices...",
        author: "Durvesh More",
        category: "SOLID Principles",
        tags: ["SOLID", "Clean Code", "Design Patterns"],
        image: "/blog-images/solid-principles.png",
        readTime: 3,
        status: "published",
        published: true,
      },
    ];

    // Sample Skills
    const skills = [
      {
        name: "Flutter",
        category: "Mobile",
        proficiency: "Advanced",
        level: 90,
        experience: 2,
        featured: true,
        order: 1,
      },
      {
        name: "Node.js",
        category: "Backend",
        proficiency: "Advanced",
        level: 95,
        experience: 3,
        featured: true,
        order: 2,
      },
      {
        name: "Azure",
        category: "Tools",
        proficiency: "Intermediate",
        level: 70,
        experience: 1,
        order: 3,
      },
      {
        name: "AWS",
        category: "Tools",
        proficiency: "Intermediate",
        level: 75,
        experience: 2,
        order: 4,
      },
      {
        name: "System Design",
        category: "Backend",
        proficiency: "Advanced",
        level: 85,
        experience: 3,
        featured: true,
        order: 5,
      },
      {
        name: "JavaScript",
        category: "Frontend",
        proficiency: "Advanced",
        level: 95,
        experience: 4,
        featured: true,
        order: 6,
      },
      {
        name: "TypeScript",
        category: "Frontend",
        proficiency: "Advanced",
        level: 88,
        experience: 2,
        featured: true,
        order: 7,
      },
      {
        name: "REST APIs",
        category: "Backend",
        proficiency: "Advanced",
        level: 92,
        experience: 3,
        order: 8,
      },
      {
        name: "React",
        category: "Frontend",
        proficiency: "Advanced",
        level: 93,
        experience: 3,
        featured: true,
        order: 9,
      },
      {
        name: "Git",
        category: "Tools",
        proficiency: "Advanced",
        level: 90,
        experience: 4,
        order: 10,
      },
      {
        name: "MongoDB",
        category: "Database",
        proficiency: "Advanced",
        level: 88,
        experience: 2,
        featured: true,
        order: 11,
      },
      {
        name: "SQL",
        category: "Database",
        proficiency: "Intermediate",
        level: 75,
        experience: 2,
        order: 12,
      },
      {
        name: "PostgreSQL",
        category: "Database",
        proficiency: "Intermediate",
        level: 78,
        experience: 1,
        order: 13,
      },
      {
        name: "Docker",
        category: "Tools",
        proficiency: "Intermediate",
        level: 72,
        experience: 1,
        order: 14,
      },
      {
        name: "Tailwind CSS",
        category: "Frontend",
        proficiency: "Advanced",
        level: 90,
        experience: 2,
        featured: true,
        order: 15,
      },
      {
        name: "Problem Solving",
        category: "Other",
        proficiency: "Advanced",
        level: 95,
        experience: 5,
        featured: true,
        order: 16,
      },
    ];

    // Insert data
    const insertedProjects = await Project.insertMany(projects);
    console.log(`✓ Inserted ${insertedProjects.length} projects`);

    const insertedBlogs = await Blog.insertMany(blogs);
    console.log(`✓ Inserted ${insertedBlogs.length} blog posts`);

    const insertedSkills = await Skill.insertMany(skills);
    console.log(`✓ Inserted ${insertedSkills.length} skills`);

    console.log("\n✓ Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("✗ Seeding error:", error);
    process.exit(1);
  }
};

seedData();
