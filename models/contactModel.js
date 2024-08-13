const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name: String,
    phoneNo:Number,
    email: String,
    message: String,    
    
}, {
    timestamps: true
})

const Contact = mongoose.model("contact", contactSchema)

module.exports = Contact
