const mongoose = require("mongoose")

const textSchema = new mongoose.Schema({
    visionText: String,
    missionText: String,
    bannerText: String,
    welcomeText: String,
    secText: String,
    profText: String,
    prov: String,
    ded: String,
    about: String,
    uninter: String,
    security: String,
    event: String,
    highly: String,
    access: String,
    success: String,
    fac: String,
    textOne: String,
    textTwo: String,
    textThree: String,
    textFour:String,
    textFive: String,
    textSix: String



    
    
}, {
    timestamps: true
})

const Text = mongoose.model("text", textSchema)

module.exports = Text
