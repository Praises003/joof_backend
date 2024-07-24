const express = require("express")
const { protect, admin } = require("../middleware/auth")
const { getContactText, updateAddress, updatePhone, updateWorkHour, updateMail } = require("../controllers/contactTextController")

const router = express.Router()

router.route("/").get(getContactText)
router.put("/address", updateAddress)
router.put("/phone", updatePhone)
router.put("/workHour", updateWorkHour)
router.put("/mail", updateMail)

module.exports = router