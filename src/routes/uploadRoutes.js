import express from 'express';
import { upload, imagekit } from '../config/imagekit.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Upload an image or document to ImageKit
// @route   POST /api/upload
// @access  Private (Admin only)
router.post('/', protect, upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // imagekit expects the file buffer explicitly
        const response = await imagekit.upload({
            file: req.file.buffer,        // The file buffer
            fileName: req.file.originalname, // Original filename 
            folder: '/portfolio'
        });

        res.status(200).json({
            message: 'File uploaded successfully',
            url: response.url,        // ImageKit URL
            fileId: response.fileId
        });
    } catch (error) {
        console.error('ImageKit Upload Error:', error);
        res.status(500).json({ message: 'Upload failed', error: error.message });
    }
});

export default router;
