const mongoose = require("../connection");

const Venue = new mongoose.Schema({
  name: String,
  location: String,
  capacity: Number
});

module.exports = mongoose.model("Venue", Venue);

// mongoose.model('Venue', Venue)

// module.exports = mongoose
