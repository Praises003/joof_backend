const express = require("express")
const { protect, admin } = require("../middleware/auth")
const upload = require('../middleware/image');
const multiUpload = require('../middleware/multiImage')
const { uploadByLink, imageUpload, multiImageUpload, getAllImages, imageUploadCon, imageUploadI, imageUploadII, multiImageUploadI, getImagesI, getImagesII, getMultiImage, getMultiImageI, deleteMultiImage, imageUploadIII, getImagesIII, imageUploadIV, imageUploadV, getImagesV, getImagesIV } = require("../controllers/imageController");
const router = express.Router()

router.route('/').get(getAllImages)
router.post("/", imageUpload)
router.post("/con", imageUploadCon)
router.post("/multi",  multiImageUpload)
router.get("/multi", getMultiImage)
router.post("/by_link", uploadByLink)
router.post("/imageI", imageUploadI)
router.get("/imageI", getImagesI)
router.post("/imageII",  imageUploadII)
router.get("/imageII", getImagesII)
router.post("/imageI/multi", multiUpload, multiImageUploadI)
router.get("/imageI/multi", getMultiImageI)
router.post("/imageIII",  imageUploadIII)
router.get("/imageIII", getImagesIII)
router.post("/imageIV",  imageUploadIV)
router.get("/imageIV", getImagesIV )
router.post("/imageV",  imageUploadV)
router.get("/imageV", getImagesV)
router.delete("/multi", deleteMultiImage)


module.exports = router