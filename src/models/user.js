const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength:8
    },
    email_id: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    }
    // status: {
    //     type: String,
    //     enum: ['Active', 'Inactive']
    // }
})

const User = mongoose.model("User",UserSchema);

module.exports = User;