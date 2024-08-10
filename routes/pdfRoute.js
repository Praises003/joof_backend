const express = require('express')
const router = express.Router()
const { getPdf, createPdf} = require('../controllers/pdfController')

//Fetch Latest Pdf
router.get('/', getPdf)

// Upload Pdf
router.post('/', createPdf)

module.exports = router