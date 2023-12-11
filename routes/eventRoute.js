const express = require("express")
const asyncHandler = require("express-async-handler")
const {createEvent, getAll} = require("../controllers/eventController")
const { protect, admin } = require("../middleware/auth")


const router = express.Router()

router.route('/').get(getAll).post(protect,createEvent)

module.exports = router