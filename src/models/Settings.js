import mongoose from 'mongoose';

const socialLinkSchema = new mongoose.Schema({
    platform: {
        type: String,
        required: true,
        enum: ['Github', 'Linkedin', 'Twitter', 'Mail', 'Other']
    },
    url: {
        type: String,
        required: true
    },
    label: String
});

const settingsSchema = new mongoose.Schema({
    resumeUrl: {
        type: String,
        default: ''
    },
    contactEmail: {
        type: String,
        required: true,
        default: 'developer.durvesh@gmail.com'
    },
    contactPhone: {
        type: String,
        default: '+91 91676 69630'
    },
    location: {
        type: String,
        default: 'Thane, Maharashtra, India'
    },
    socialLinks: [socialLinkSchema],
    aboutShortcut: {
        type: String,
        default: 'Full Stack Developer'
    }
}, {
    timestamps: true
});

const Settings = mongoose.model('Settings', settingsSchema);

export default Settings;
