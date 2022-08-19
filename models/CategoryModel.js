const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    count:{
        type: Number,
        required: false,
    },   
}, { timestamp: true})

module.exports = mongoose.model("Category", CategorySchema)