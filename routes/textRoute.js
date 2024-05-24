const express = require("express")
const { protect, admin } = require("../middleware/auth")
const { editHomeText, editHomeText2, editHomeText3, welcomeText, secText, profText, visitText, rufusText, eventText, banquetText, roomText, securityText, highText, dedText, highlyText, accessText, successText, facText, oneText, twoText, threeText, fourText, fiveText, sixText } = require("../controllers/textController")


const router = express.Router()
router.route('/').put(editHomeText)

router.put("/edittwo",  editHomeText2)
router.put("/editthree", editHomeText3)
router.put("/welcomeText", welcomeText)
router.put("/secText", secText)
router.put("/profText", profText)
router.put("/visitText", visitText)
router.put("/rufusText", rufusText)
router.put("/eventText", eventText)
router.put("/banquetText", banquetText)
router.put("/roomText", roomText)
router.put("/securityText", securityText)
router.put("/highText", highText)
router.put("/dedText", dedText )
router.put("/highlyText", highlyText)
router.put("/accessText", accessText)
router.put("/successText", successText)
router.put("/facText", facText)
router.put("/oneText", oneText)
router.put("/twoText", twoText)
router.put("/threeText", threeText)
router.put("/fourText", fourText)
router.put("/fiveText", fiveText)
router.put("/sixText", sixText)


module.exports = router