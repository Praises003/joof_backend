const express = require("express")
const { protect, admin } = require("../middleware/auth")
const { getText } = require("../controllers/uploads/textsController")

const router = express.Router()

router.route("/").get(getText)

module.exports = router