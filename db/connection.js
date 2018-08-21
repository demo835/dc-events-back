const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dc-events-api");

mongoose.Promise = Promise;

module.exports = mongoose;
