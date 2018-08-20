const mongoose = require("../connection");
const Schema = mongoose.Schema;
const Venue = require("./Venue");

<<<<<<< HEAD
const Event = new mongoose.Schema(
  {
    name: String,
    // venue: Venue,
    venue: String,
    description: String,
    food: String,
    cost: Number
  },
  { collection: "event" }
);
=======
const Event = new mongoose.Schema({
  name: String,
  venue: String,
  description: String,
  food: String,
  cost: Number
});
>>>>>>> thomas

module.exports = mongoose.model("Event", Event);

// mongoose.model('Event', Event)

// module.exports = mongoose
