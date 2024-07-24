const asyncHandler = require('express-async-handler')

const contactText = require("../models/contactTextModel")

const getContactText = asyncHandler(async (req, res) => {
    try {
        const textData = await contactText.findOne();
        res.status(200).json(textData)        
    } catch (error) {
        res.status(500)
        throw new Error({message: error.message})
        
    }
})

// Update Address Text

const updateAddress = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await contactText.findOneAndUpdate({}, { address: text}, {new: true, upsert: true} );
        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})


const updatePhone = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await contactText.findOneAndUpdate({}, { phone: text}, {new: true, upsert: true} );
        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

const updateWorkHour = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await contactText.findOneAndUpdate({}, { workHour: text}, {new: true, upsert: true} );
        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})

const updateMail = asyncHandler(async (req, res) => {
    try {
        const { text } = req.body;
        const updatedText = await contactText.findOneAndUpdate({}, { mail: text}, {new: true, upsert: true} );
        res.json(updatedText)
    } catch (error) {
        res.status(500)
        throw new Error({ message: error.message });
    }
})


module.exports = { getContactText, updateAddress, updatePhone, updateWorkHour, updateMail}



