const asyncHandler = require('express-async-handler')

const Table = require("../models/tableModel")

const getAllTable = asyncHandler(async(req, res) => {
    try {
        const tables = await Table.find();
        res.status(200).json(tables);
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }

    const tables = await Table.find();
    res.status(200).json(tables);

})

// Reserve a seat

const reserveSeat = asyncHandler(async(req, res) => {
    const { tableNumber, seatNumber, name } = req.body;
    const table = await Table.findOne({ tableNumber });


    if (table) {
        const seat = table.seats.find((seat) => seat.seatNumber === seatNumber);
        if (seat && !seat.isReserved) {
          seat.isReserved = true;
          seat.reservedBy = name;
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
        const table = new Table({ tableNumber, seats });
        await table.save();
        res.status.json(table);
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
    

})

module.exports= { getAllTable, reserveSeat, addTable }