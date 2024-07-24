const mongoose = require("mongoose")

const contactTextSchema = new mongoose.Schema({
    address: String,
    phone: String,
    workHour: String,
    mail: String,



    
    
}, {
    timestamps: true
})

const ContactText = mongoose.model("contactText", contactTextSchema)

module.exports = ContactText
