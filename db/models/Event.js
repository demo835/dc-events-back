const mongoose = require("../connection");
const Venue = require("./Venue");
const Schema = mongoose.Schema;

const Event = new mongoose.Schema({
  name: String,
  venue: {
    type: Schema.Types.ObjectId,
    ref: "Venue"
  },
  description: String,
  food: String,
  cost: Number
});

module.exports = mongoose.model("Event", Event);

// mongoose.model('Event', Event)

// module.exports = mongoose
