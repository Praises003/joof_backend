const mongoose = require("mongoose")

const textSchema = new mongoose.Schema({
    visionText: String,
    missionText: String,
    bannerText: String
    
    
}, {
    timestamps: true
})

const Text = mongoose.model("text", textSchema)

module.exports = Text
