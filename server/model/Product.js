const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4,
    },
    desc: {
        type: String,
        required: true,
        min: 0,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    review: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Product", ProductSchema)