const express = require("express")
const { protect, admin } = require("../middleware/auth")
const { createGuest, getSingleGuest } = require("../controllers/guestController")

const router = express.Router()

router.route('/').get(protect, getSingleGuest).post(protect, createGuest)

module.exports = router