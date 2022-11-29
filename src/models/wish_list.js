const mongoose = require('mongoose');

const WishListSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    number_of_products:{
        type: String,
        required: true,
        trim: true,
        minlength:8
    }
})

const WishList = mongoose.model("WishList",WishListSchema);

module.exports = WishList;