const mongoose = require("mongoose")

const pbSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        uppercase: true,
    },
    budget: {
        type: Number,
        required: true,
        unique: false,
    },
    color: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    }
}, { collection: 'Data' })

module.exports = mongoose.model('Data', pbSchema)