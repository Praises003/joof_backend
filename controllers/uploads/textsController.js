const asyncHandler = require('express-async-handler')
const Text = require("../../models/textModel")
const getText = asyncHandler(async (req, res) => {
    try {
        const textData = await Text.findOne();
        res.status(200).json(textData)        
    } catch (error) {
        res.status(500)
        throw new Error({message: error.message})
        
    }
})

//Update Vision Text
const updateVision = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { visionText: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

// Update bannerText
const updateBanner = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { bannerText: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

// Update Mission Text

const updateMission = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { missionText: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

//update Welcome
const updateWelcome = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { welcomeText: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})


// Update secText

const updateSec = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { secText: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

const updateProf = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { profText: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

// prov

const updateProv = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { prov: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

const updateDed = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { ded: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

const updateHighly = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { highly: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

const updateAccess = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { access: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

const updateSuccess = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { success: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

const updateFac = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { fac: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

const updateTextOne = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { textOne: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

const updateTextTwo = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { textTwo: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})


const updateTextThree = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { textThree: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

const updateTextFour = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { textFour: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

const updateTextFive = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { textFive: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})


const updateTextSix = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { textSix: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

module.exports = {getText, updateVision, updateBanner, updateMission, updateWelcome, updateSec, updateProf, updateProv, updateDed, updateHighly, updateAccess, updateSuccess, updateFac, updateTextOne, updateTextTwo, updateTextThree, updateTextFour, updateTextFive, updateTextSix}