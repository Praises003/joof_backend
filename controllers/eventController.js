const asyncHandler = require('express-async-handler')
const Event = require("../models/eventModel")

const createEvent = asyncHandler(async(req, res) => {
    const {title, description, type, date} = req.body
    console.log(req.user)

    if(!title || !description || !date ) {
        res.status(400)
        throw new Error("Please Fill Up all the Fields")
    }

    const eventExist =  await Event.findOne({ date })

    if(eventExist) {
        res.status(400);
        throw new Error("Event has already being booked")
    }

    const event = await Event.create({
        title, description, type, date, user: req.user._id
    })

    const fullEvent = await Event.findOne({ _id: event._id}).populate("user", "-password")

    // if (event) {
    //     res.status(201).json({
    //         _id: event._id,
    //         description: event.description,
    //         date: date,
    //         user: event.user
            
           
    //     })

    if (fullEvent) {
        res.status(200).json(fullEvent)

        
    } else {
        res.status(400)
        throw new Error("Error")
    }

})

const getAll = asyncHandler(async(req, res) => {
    let event = await Event.find()
    res.json(event)
})

const renameEvent = asyncHandler(async(req, res) => {
    const { eventId, title, description, type, date } = req.body

    const renamedEvent = await Event.findByIdAndUpdate(eventId, {
        title,
        description,
        type,
        date
    }, {
        new: true
    }).populate("user", "-password")
    if(!renamedEvent) {
        res.status(404)
        throw new Error("An Error Occured")
    } else {
        res.status(201).json(renamedEvent)
    }
})

module.exports = {createEvent, getAll, renameEvent}