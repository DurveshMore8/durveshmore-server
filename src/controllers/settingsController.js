import Settings from '../models/Settings.js';

// @desc    Get all settings
// @route   GET /api/settings
// @access  Public
export const getSettings = async (req, res) => {
    let settings = await Settings.findOne();

    // If no settings exist, create default
    if (!settings) {
        settings = await Settings.create({
            socialLinks: [
                { platform: 'Github', url: 'https://github.com/DurveshMore8/', label: 'GitHub' },
                { platform: 'Linkedin', url: 'https://linkedin.com/in/durveshmore/', label: 'LinkedIn' },
                { platform: 'Twitter', url: 'https://x.com/Durvesh8403/', label: 'Twitter' },
                { platform: 'Mail', url: 'mailto:developer.durvesh@gmail.com', label: 'Email' }
            ]
        });
    }

    res.status(200).json({
        success: true,
        data: settings
    });
};

// @desc    Update settings
// @route   PUT /api/settings
// @access  Private/Admin
export const updateSettings = async (req, res) => {
    let settings = await Settings.findOne();

    const updateData = { ...req.body };
    delete updateData._id;
    delete updateData.__v;
    delete updateData.createdAt;
    delete updateData.updatedAt;

    if (settings) {
        settings = await Settings.findByIdAndUpdate(settings._id, updateData, {
            new: true,
            runValidators: true
        });
    } else {
        settings = await Settings.create(req.body);
    }

    res.status(200).json({
        success: true,
        data: settings
    });
};
