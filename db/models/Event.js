const mongoose = require('./connection')

const Event = new mongoose.Schema({
    name: String,
    venue: Venue,
    description: String,
    food: String,
    cost: Number
})

module.exports = mongoose.model("Venue", Venue)

// mongoose.model('Event', Event)

// module.exports = mongoose