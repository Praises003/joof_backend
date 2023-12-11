const express = require("express")
const {registerUser, logout, login, getAllUsers, allUsers} = require("../controllers/userController")
const { protect, admin } = require("../middleware/auth")

const router = express.Router()

router.route('/').get(protect,admin, allUsers).post(registerUser)
router.post("/login", login)
router.post("/logout", logout)

module.exports = router