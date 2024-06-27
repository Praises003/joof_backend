const express = require("express")
const { protect, admin } = require("../middleware/auth")
const { getAllTable, reserveSeat, addTable, updateReservedSeat } = require("../controllers/tableController")


const router = express.Router()

router.get('/', protect, getAllTable)
router.post('/reserve',protect, reserveSeat)
router.post('/', protect, addTable)
router.put('/update-reserve/:tableNumber/:seatNumber', protect, updateReservedSeat);

module.exports = router