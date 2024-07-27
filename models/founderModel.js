const mongoose = require("mongoose")

const profSchema = new mongoose.Schema({
    name: { 
        type: String, 
    },
    
    image: {
        type: String
    },
    description: {
        type: String
    }
    
}, {
    timestamps: true
})

const Prof = mongoose.model("Prof", profSchema)

module.exports = Prof
