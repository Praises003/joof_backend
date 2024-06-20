const express = require("express")


const { protect, admin } = require("../middleware/auth")
const { getAllPackages, createPackages, updatePackages, deletePackages } = require("../controllers/packageController")


const router = express.Router()

router.route('/').get(getAllPackages).post(createPackages)
router.put('/:id', updatePackages)
router.delete('/:id', deletePackages)



module.exports = router