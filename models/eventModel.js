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
    },

    image: {
        type: String,
        default: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F750193329%2F2120058437323%2F1%2Foriginal.png?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C940%2C470&s=26ecef5078b51a9e966af6103b6a5c0b"
    }


}, {
    timestamps: true
})



const Event = mongoose.model("Event", eventSchema)

module.exports = Event