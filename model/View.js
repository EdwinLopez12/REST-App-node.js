const mongoose = require('mongoose');

const viewSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    description: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: null
    },
    deleted_at: {
        type: Date,
        default: null
    },
});

module.exports = mongoose.model('View', viewSchema);