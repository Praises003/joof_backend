const mongoose = require("mongoose")

const videoSchema = new mongoose.Schema({
    id: String,
    videoUrl: String

}, {
    timestamp:true
})

const Video = mongoose.model("Video", videoSchema)

module.exports = Video