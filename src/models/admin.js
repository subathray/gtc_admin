const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength:8
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive']
    }
})

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;