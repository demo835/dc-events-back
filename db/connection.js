const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/dc-events");

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
  } else {
    mongoose.connect("mongodb://localhost/dc-events");
  }

mongoose.Promise = Promise;

module.exports = mongoose;
