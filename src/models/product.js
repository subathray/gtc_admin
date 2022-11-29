const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    vendor_id: {
        type: Number,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive']
    },
    quantity_available: {
        type: Number,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    category_id: {
        type: String,
        required: true,
        trim: true
    },
    subcategory_id: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

// {
//     "name": "POCO",
//     "vendor_id": 5,
//     "status": "Active",
//     "quantity_available": 30,
//     "description": "Black color, with charger",
//     "category_id": "Electronics",
//     "subcategory_id": "Mobile",
//     "price": 15000
//  }