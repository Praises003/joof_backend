const asyncHandler = require('express-async-handler')
const Guest = require("../models/guestModel")

const createGuest = asyncHandler(async(req, res) => {
    const {name, seatNum,} = req.body
    
    if(!name || !seatNum /*|| !section */ ) {
        res.status(400)
        throw new Error("Please Fill Up all the Fields")
    }

    const guestExist =  await Guest.findOne({ name })

    if(guestExist) {
        res.status(400);
        throw new Error("Guest Already Exists")
    }

    const guest = await Guest.create({
        name, seatNum, user: req.user._id 
    })

    const fullGuest = await Guest.findOne({ _id: guest._id}).populate("user", "-password")


    if (fullGuest) {
        res.status(200).json(fullGuest)

        
    } else {
        res.status(400)
        throw new Error("Error")
    }

    
})

const getSingleGuest = asyncHandler(async(req, res) => {
    let singleGuest = await Guest.find({ user: req.user._id })
    res.json(singleGuest)
})


module.exports = {createGuest, getSingleGuest}