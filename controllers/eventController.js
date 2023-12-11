const asyncHandler = require('express-async-handler')
const Event = require("../models/eventModel")

const createEvent = asyncHandler(async(req, res) => {
    const {title, description, start, end, user} = req.body

    if(!title || !description || !start || !end ) {
        res.status(400)
        throw new Error("Please Fill Up all the Fields")
    }

    const eventExist =  await Event.findOne({ start: {$gte: start}, end: {$lte: end} })

    if(eventExist) {
        res.status(400);
        throw new Error("Event has already being booked")
    }

    const event = await Event.create({
        title, description, start, end, user: req.user._id
    })

    if (event) {
        res.status(201).json({
            _id: event._id,
            description: event.description,
            start: event.start,
            end: event.end,
            user: event.user
            
           
        })
        
    } else {
        res.status(400)
        throw new Error("Error")
    }

})

const getAll = asyncHandler(async(req, res) => {
    let event = await Event.find()
    res.json(event)
})

module.exports = {createEvent, getAll}