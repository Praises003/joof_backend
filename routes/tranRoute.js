const express = require("express")

const { tranCon } = require("../controllers/tranController")

const router = express.Router()

router.route("/").get(tranCon)

module.exports = router
