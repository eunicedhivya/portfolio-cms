const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
    },
    lname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {type: String, required: true, maxLength: 500},
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }})

module.exports = mongoose.model("User", UserSchema);