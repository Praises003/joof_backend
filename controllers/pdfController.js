const asyncHandler = require('express-async-handler');

const path = require('path');
const fs = require('fs');

const Pdf = require("../models/pdfModel")

// Get Pdf Data

const createPdf = asyncHandler(async (req, res) => {
    try {

        if (!req.files || !req.files.pdf) {
            return res.status(400).json({ message: 'No files were uploaded.' });
        }

        const pdf = req.files.pdf;

        const fileName = Date.now() + path.extname(pdf.name);
        const uploadPath = path.join(__dirname, '..', 'uploads', Date.now() + path.extname(pdf.name));

        pdf.mv(uploadPath, async (err) => {
            if (err) return res.status(500).json({ message: err.message });


            // Construct the full URL
            const baseUrl = `http://${req.headers.host}`;
            const fileUrl = `${baseUrl}/uploads/${fileName}`;


            const newPdf = new Pdf({
                originalName: pdf.name,
                filePath: fileUrl,
                mimeType: pdf.mimetype,
                size: pdf.size,
            });

            await newPdf.save();
            res.status(200).json({ message: 'File uploaded successfully', file: newPdf });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

const getPdf = asyncHandler(async(req, res) => {
    try {
        const latestPdf = await Pdf.findOne().sort({ createdAt: -1 }); // Sort by creation date in descending order
        if (!latestPdf) return res.status(404).json({ message: 'No files found' });
        res.status(200).json(latestPdf);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = {getPdf, createPdf}