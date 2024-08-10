const mongoose = require("mongoose")



const pdfSchema = new mongoose.Schema({
    originalName: String,
    filePath: String,
    mimeType: String,
    size: Number,
}, {
    timestamps: true
});

const Pdf = mongoose.model("Pdf", pdfSchema)

module.exports = Pdf