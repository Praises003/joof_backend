const mongoose = require("mongoose")

const tableSchema = new mongoose.Schema({
    tableNumber: Number,
    seats: [
      {
        seatNumber: Number,
        isReserved: { type: Boolean, default: false },
        reservedBy: { type: String, default: '' },
      },
    ],
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event"
  }
  });


  const Table = mongoose.model('Table', tableSchema);

  module.exports = Table