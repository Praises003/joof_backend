const express = require("express")
const { protect, admin } = require("../middleware/auth")
const { editHomeText, editHomeText2, editHomeText3 } = require("../controllers/textController")


const router = express.Router()
router.route('/').put(editHomeText)

router.put("/edittwo",  editHomeText2)
router.put("/editthree", editHomeText3)

module.exports = router