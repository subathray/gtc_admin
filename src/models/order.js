const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    order_id_number: {
        type: Number,
        required: true,
        trim: true,
    },
    user_id:{
        type: Number,
        unique: true,
        required: true,
        trim: true,
    },
    number_of_products: {
        type: Number,
        required: true,
        trim: true,
    },
    total: {
        type: Number,
        required: true,
        trim: true
    },
    shipping_id: {
        type: Number,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive']
    }
})

const Order = mongoose.model("Order",OrderSchema);

module.exports = Order;