const mongoose = require("mongoose")

const guestSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    seatNum: { 
        type: String, 
        required: true,
    },
    section: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    } 
    
}, {
    timestamps: true
})

const Guest = mongoose.model("Guest", guestSchema)

module.exports = Guest
