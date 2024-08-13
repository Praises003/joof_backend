const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel");

//Get All Contacts

const getContact = asyncHandler(async (req, res) => {
    try {
        const contactData = await Contact.find().sort({ createdAt: -1 })

        // Check if data was found
        if (!contactData) {
            return res.status(404).json({ message: 'Contact data not found' });
        }

        res.status(200).json(contactData)
    } catch (error) {
        res.status(500).json({ message: error.message });        
    }
})

const createContact = asyncHandler(async (req, res) => {
    try {
        const { name, phoneNo, email, message} = req.body

        const createdContact = await Contact.create({name, phoneNo, email, message  })

        res.status(201).json(createdContact);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
        
    }
})

module.exports =  {getContact, createContact}

