const express = require("express")
const asyncHandler = require("express-async-handler")
const {createEvent, getAll, renameEvent, getAllEventsByUser} = require("../controllers/eventController")
const { protect, admin } = require("../middleware/auth")


const router = express.Router()

router.route('/').get(getAll).post(protect,createEvent)
router.get('/current', protect, getAllEventsByUser)

router.put("/renameevent", protect, renameEvent)

module.exports = router