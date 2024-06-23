const express = require("express")
const upload = require("../middleware/videoUpload")
const { getVideo, uploadVideo } = require("../controllers/videoController")

const router = express.Router()

router.route("/").get(getVideo).post()
router.post("/",  uploadVideo )

module.exports = router