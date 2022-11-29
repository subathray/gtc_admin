const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
        trim: true,
    },
    order_id:{
        type: Number,
        required: true,
        trim: true,
        minlength:8
    },
    paid_amt: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
    },
    transaction_number: {
        type: Number,
        unique: true,
        required: true,
        trim: true
    }
})

const Payment = mongoose.model("Payment",PaymentSchema);

module.exports = Payment;