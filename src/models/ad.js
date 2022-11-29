const mongoose = require('mongoose');
require('mongoose-type-url');


const adSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    target_url: {
        type: mongoose.SchemaTypes.Url,
        required: true,
        trim: true
    }
})

const Ad = mongoose.model("Ad",adSchema);

module.exports = Ad;