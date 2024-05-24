const express = require("express")
const { protect, admin } = require("../middleware/auth")
const upload = require('../middleware/image');
const multiUpload = require('../middleware/multiImage')
const { uploadByLink, imageUpload, multiImageUpload } = require("../controllers/imageController");
const router = express.Router()

router.route('/').get()
router.post("/", upload.single('file'),imageUpload)
router.post("/multi", multiUpload, multiImageUpload)
router.post("/by_link", uploadByLink)

module.exports = router