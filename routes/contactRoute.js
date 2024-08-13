const express = require("express")
const { getContact, createContact } = require("../controllers/contactController")
const router = express.Router()


//Fetch all contact
router.get("/", getContact)
router.post("/", createContact)

module.exports = router