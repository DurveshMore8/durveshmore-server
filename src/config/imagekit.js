import ImageKit from "imagekit";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

// Initialize ImageKit
export const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// Configure Multer to store the file in memory instead of uploading directly 
// to a custom cloud storage provider like the old CloudinaryStorage did.
const storage = multer.memoryStorage();

export const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});
