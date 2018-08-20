const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/dc-events");

mongoose.Promise = Promise

module.exports = mongoose