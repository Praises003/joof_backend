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

const ImageI = mongoose.model("ImageI", imageSchema)

module.exports = ImageI