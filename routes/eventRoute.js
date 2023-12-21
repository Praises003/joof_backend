const express = require("express")
const asyncHandler = require("express-async-handler")
const {createEvent, getAll, renameEvent} = require("../controllers/eventController")
const { protect, admin } = require("../middleware/auth")


const router = express.Router()

router.route('/').get(getAll).post(protect,createEvent)

router.put("/renameevent", protect, renameEvent)

module.exports = router