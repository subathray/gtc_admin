const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    }
})

const Country = mongoose.model("Country",CountrySchema);

module.exports = Country;