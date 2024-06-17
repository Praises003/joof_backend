const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
    multipleImages: [{
        url: { 
            type: String, 
        },
        filename: { type: String }, //Optional for storing original filename
    }],
    singleImage: {
        url: {
            type: String
        },
        fileName: {type: String}
    }
}, {
    timestamp:true
})

const ImageIV = mongoose.model("ImageIV", imageSchema)

module.exports = ImageIV