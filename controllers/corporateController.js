const asyncHandler = require('express-async-handler');
const Corporate = require("../models/corporateModel");

// Get Corporate Data
const getCorporate = asyncHandler(async (req, res) => {
    try {
        const corporateData = await Corporate.findOne();
        res.status(200).json(corporateData);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Banner Text
const updateBannerText = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { bannerText: text }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Banner Image
const updateBannerImage = asyncHandler(async (req, res) => {
    try {
        const { image } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { bannerImage: image }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Vision Text
const updateVisionText = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { visionText: text }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Vision Image
const updateVisionImage = asyncHandler(async (req, res) => {
    try {
        const { image } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { visionImage: image }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Vision Description
const updateVisionDescription = asyncHandler(async (req, res) => {
    try {
        const { description } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { visionDes: description }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Mission
const updateMission = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { mission: text }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Mission Image
const updateMissionImage = asyncHandler(async (req, res) => {
    try {
        const { image } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { missionImage: image }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Mission Description
const updateMissionDescription = asyncHandler(async (req, res) => {
    try {
        const { description } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { missionDes: description }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Value
const updateValue = asyncHandler(async (req, res) => {
    try {
        const { value } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { value: value }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Community
const updateCommunity = asyncHandler(async (req, res) => {
    try {
        const { community } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { community: community }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Community Text
const updateCommunityText = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { communityText: text }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Excellence
const updateExcellence = asyncHandler(async (req, res) => {
    try {
        const { excellence } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { excellence: excellence }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Excellence Text
const updateExcellenceText = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { excellenceText: text }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Innovation
const updateInnovation = asyncHandler(async (req, res) => {
    try {
        const { innovation } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { innovation: innovation }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Innovation Text
const updateInnovationText = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { innovationText: text }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Culture
const updateCulture = asyncHandler(async (req, res) => {
    try {
        const { culture } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { culture: culture }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Culture Text
const updateCultureText = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { cultureText: text }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Education
const updateEducation = asyncHandler(async (req, res) => {
    try {
        const { education } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { education: education }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Education Text
const updateEducationText = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { educationText: text }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Collaboration
const updateCollaboration = asyncHandler(async (req, res) => {
    try {
        const { collaboration } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { collaboration: collaboration }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// Update Collaboration Text
const updateCollaborationText = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedCorporate = await Corporate.findOneAndUpdate({}, { collaborationText: text }, { new: true, upsert: true });
        res.json(updatedCorporate);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

module.exports = {
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
}