const mongoose = require("mongoose")

const corporateSchema = new mongoose.Schema({
    bannerText: String,    
    bannerImage: String,
    visionText: String,
    visionImage: String,
    visionDes: String,
    mission: String,
    missionImage: String,
    missionDes: String,
    value: String,
    community: String,
    communityText: String,
    excellence: String,
    excellenceText: String,
    innovation: String,
    innovationText: String,
    culture: String,
    cultureText:String,
    education: String,
    educationText: String,
    collaboration: String,
    collaborationText: String



    
    
}, {
    timestamps: true
})

const Corporate = mongoose.model("corporate", corporateSchema)

module.exports = Corporate
