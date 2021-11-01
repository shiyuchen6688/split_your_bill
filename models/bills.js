const mongoose = require("mongoose")

// define the structure of document
const billSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide name for Bill"],
        trim: true,
        maxLength: [30, "Name length must <= 30"]
    },
    price: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Bill", billSchema)