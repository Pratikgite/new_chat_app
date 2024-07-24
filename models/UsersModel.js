const mongoose = require("mongoose");

const Users = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    dob: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    isActive: {
        type: Number,
        required: true,
        default: 1 // 1 is for active
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('users', Users);