const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    rating:{
        type: Number,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        maxlength:100
    }
})

const Review = mongoose.model("Review",ReviewSchema);

module.exports = Review;