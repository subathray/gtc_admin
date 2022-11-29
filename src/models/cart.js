const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    
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
    }
})

const Cart = mongoose.model("Cart",CartSchema);

module.exports = Cart;