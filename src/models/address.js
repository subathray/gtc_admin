const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    address_id: {
        type: Number,
        required: true,
        trim: true
    },
    street: {
        type: String,
        required: true,
        trim: true
    },
    door_no: {
        type: Number,
        required: true,
        trim: true
    },
    pin_code: {
        type: Number,
        required: true,
        trim: true
    },
    country_id: {
        type: Number,
        required: true,
        trim: true
    },
    state_id: {
        type: Number,
        required: true,
        trim: true
    },
    near_by: {
        type: String,
        required: true,
        trim: true
    }

})

const Address = mongoose.model("Address",AddressSchema);

module.exports = Address;