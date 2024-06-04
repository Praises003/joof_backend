const express = require("express")
const { protect, admin } = require("../middleware/auth")
const upload = require('../middleware/image');
const multiUpload = require('../middleware/multiImage')
const { uploadByLink, imageUpload, multiImageUpload, getAllImages, imageUploadCon, imageUploadI, imageUploadII, multiImageUploadI, getImagesI, getImagesII, getMultiImage, getMultiImageI } = require("../controllers/imageController");
const router = express.Router()

router.route('/').get(getAllImages)
router.post("/", upload.single('file'),imageUpload)
router.post("/con", upload.single('file'),imageUploadCon)
router.post("/multi", multiUpload, multiImageUpload)
router.get("/multi", getMultiImage)
router.post("/by_link", uploadByLink)
router.post("/imageI",upload.single('file'), imageUploadI)
router.get("/imageI", getImagesI)
router.post("/imageII",upload.single('file'),  imageUploadII)
router.get("/imagesII", getImagesII)
router.post("/imageI/multi", multiUpload, multiImageUploadI)
router.get("/imageI/multi", getMultiImageI)

module.exports = router