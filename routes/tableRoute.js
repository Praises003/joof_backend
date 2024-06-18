const express = require("express")
const { protect, admin } = require("../middleware/auth")
const { getAllTable, reserveSeat, addTable } = require("../controllers/tableController")


const router = express.Router()

router.get('/', getAllTable)
router.post('/reserve', reserveSeat)
router.post('/', addTable)

module.exports = router