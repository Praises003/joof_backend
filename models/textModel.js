const mongoose = require("mongoose")

const textSchema = new mongoose.Schema({
    text: { 
        type: String, 
        default: "Home Text",
        requiredt: true,
        
    },
    
    
}, {
    timestamps: true
})

const Text = mongoose.model("Text", textSchema)

module.exports = Text
