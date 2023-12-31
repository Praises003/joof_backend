const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const eventSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true 
     },
    date: {
        type: Date,
        required: true
    },
    
    type: {
        type: String,
        required: true

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }


}, {
    timestamps: true
})



const Event = mongoose.model("Event", eventSchema)

module.exports = Event