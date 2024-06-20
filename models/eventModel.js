const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const Table = require("./tableModel")

const eventSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true 
     },
    date: {
        type: Date,
        required: true
    },
    
    type: {
        type: String,
        required: true

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    price: {
        type: Number,
        default: 0

    },

    image: {
        type: String,
        default: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F750193329%2F2120058437323%2F1%2Foriginal.png?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C940%2C470&s=26ecef5078b51a9e966af6103b6a5c0b"
    }


}, {
    timestamps: true
})

eventSchema.post('save', async function(event) {
    try {
        // Find all tables associated with this event
        const tablesToUpdate = await Table.find({ event: event._id });

        // Update the reserved status of each table's seats
        for (const table of tablesToUpdate) {
            table.seats.forEach(seat => {
                if (seat.isReserved && (!event.date || new Date() > event.date)) {
                    seat.isReserved = false; // Set isReserved to false if event has ended
                }
            });
            await table.save();
        }
    } catch (error) {
        console.error("Error updating tables:", error);
        throw error; // Handle or propagate the error as needed
    }
});



const Event = mongoose.model("Event", eventSchema)

module.exports = Event