const express = require("express");
const { protect, admin } = require("../middleware/auth");
const {
    getCorporate,
    updateBannerText,
    updateBannerImage,
    updateVisionText,
    updateVisionImage,
    updateVisionDescription,
    updateMission,
    updateMissionImage,
    updateMissionDescription,
    updateValue,
    updateCommunity,
    updateCommunityText,
    updateExcellence,
    updateExcellenceText,
    updateInnovation,
    updateInnovationText,
    updateCulture,
    updateCultureText,
    updateEducation,
    updateEducationText,
    updateCollaboration,
    updateCollaborationText
} = require('../controllers/corporateController');

const router = express.Router();

// Get Corporate Data
router.route("/").get(getCorporate);

// Update Banner
router.put("/bannerText", updateBannerText);
router.put("/bannerImage", updateBannerImage);

// Update Vision
router.put("/visionText", updateVisionText);
router.put("/visionImage", updateVisionImage);
router.put("/visionDescription", updateVisionDescription);

// Update Mission
router.put("/mission", updateMission);
router.put("/missionImage", updateMissionImage);
router.put("/missionDescription", updateMissionDescription);

// Update Value
router.put("/value", updateValue);

// Update Community
router.put("/community", updateCommunity);
router.put("/communityText", updateCommunityText);

// Update Excellence
router.put("/excellence", updateExcellence);
router.put("/excellenceText", updateExcellenceText);

// Update Innovation
router.put("/innovation", updateInnovation);
router.put("/innovationText", updateInnovationText);

// Update Culture
router.put("/culture", updateCulture);
router.put("/cultureText", updateCultureText);

// Update Education
router.put("/education", updateEducation);
router.put("/educationText", updateEducationText);

// Update Collaboration
router.put("/collaboration", updateCollaboration);
router.put("/collaborationText", updateCollaborationText);

module.exports = router;
