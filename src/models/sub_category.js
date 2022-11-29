const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    category_id: {
        type: Number,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    }
})

const SubCategory = mongoose.model("SubCategory",SubCategorySchema);

module.exports = SubCategory;