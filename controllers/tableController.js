const asyncHandler = require('express-async-handler')

const Table = require("../models/tableModel")

const Event = require("../models/eventModel")
const getAllTable = asyncHandler(async(req, res) => {
    try {
        const tables = await Table.find();
        res.status(200).json(tables);
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }

   

})

// Reserve a seat

const reserveSeat = asyncHandler(async(req, res) => {
    const { tableNumber, tableName, seatNumber, name } = req.body;
    let table;
    if (tableName) {
      table = await Table.findOne({ tableNumber, tableName });
    } else {
      table = await Table.findOne({ tableNumber });
    }



    // const events = Event.find({ user: req.user._id })

    // if(!events) {
    //     res.status(400)

    //     throw new Error("Book An Event before reserving a seat")
    // }


    if (table) {
        const seat = table.seats.find((seat) => seat.seatNumber === seatNumber);
        if (seat && !seat.isReserved) {
          seat.isReserved = true;
          seat.reservedBy = name;
          seat.tableName = table.tableName;
          await table.save();
          res.json({ success: true });
        } else {
          res.json({ success: false, message: 'Seat already reserved' });
        }
      } else {
        res.json({ success: false, message: 'Table not found' });
      }
  

});

// Add New table

const addTable = asyncHandler(async(req, res) => {

    try {
        const { tableNumber, seats } = req.body;
        const table = new Table({ tableNumber,  seats });
        await table.save();
        res.status(200).json(table);
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
    

})

module.exports= { getAllTable, reserveSeat, addTable }