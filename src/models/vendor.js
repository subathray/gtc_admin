const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    company_name: {
        type: String,
        required: true,
        trim: true
    },
    plan_id: {
        type: String,
        enum: ['Plan A', 'Plan B', 'Plan C', 'Plan D'],
        required: true
    },
    verified_vendor: {
        type: Boolean
    },
    email_id: {
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

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;