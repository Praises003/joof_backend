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
const UpdateVision = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await Text.findOneAndUpdate({}, { visionText: text}, {new: true, upsert: true} );

        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

// Update 


module.exports = {getText, UpdateVision}