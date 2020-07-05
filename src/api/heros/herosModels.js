const { Schema } = require("mongoose");

const herosSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    description: {
        type: String,
        unique: false,
        required: true
    }
}, {
    timestamps: true
})

module.exports = herosSchema;