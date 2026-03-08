import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Prevent duplicate connections in serverless environments
    if (mongoose.connection.readyState >= 1) {
      return mongoose.connection;
    }

    const mongoUri =
      process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio-cms";

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✓ MongoDB connected successfully");
    return mongoose.connection;
  } catch (error) {
    console.error("✗ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
