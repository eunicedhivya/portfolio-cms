const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    publication:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    category:{
        type: [{
            type: String
        }],
        required: false,
    },
    img:{
        type: String,
        required: false,
    },
    demolink:{
        type: String,
        required: true,
    },
    githublink:{
        type: String,
        required: true,
    },
}, { timestamps: true})

module.exports = mongoose.model("Portfolio", PortfolioSchema)