const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    cost_per_month:{
        type: Number,
        required: true,
        trim: true,
    },
    product_limit: {
        type: Number,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive']
    }
})

const Plan = mongoose.model("Plan",PlanSchema);

module.exports = Plan;