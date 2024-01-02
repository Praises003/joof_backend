const express = require("express")
const { stripeCon } = require("../controllers/stripeController")

const router = express.Router()

router.route("/").post(stripeCon)

module.exports = router