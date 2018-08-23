const express = require("express");
const parser = require("body-parser");
// const mongoose = require('./db/schema.js')
const Event = require("./db/models/Event");
const Venue = require("./db/models/Venue");
const cors = require("cors");
const app = express();

app.use(cors());
// app.set("port", process.env.PORT || 3001);
app.use(parser.json());

// app.get("/", (req, res) => {
//   res.redirect("Hello world");
// });

//  Events Controllers and Routes

app.get("/events", (req, res) => {
  Event.find()
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/events/:id", (req, res) => {
  Event.findOne({ _id: req.params.id })
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/events/new", (req, res) => {
  Event.create(req.body)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete("/events/delete/:id", (req, res) => {
  Event.findOneAndRemove({ _id: req.params.id }, req.body)
    .then(event => {
      // res.json(event);
      res.redirect("/")
    })
    .catch(err => {
      console.log(err);
    });
});

app.put("/events/update/:id", (req, res) => {
  Event.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      console.log(err);
    });
});

// Venues Controllers and Routes

app.get("/", (req, res) => {
  res.send("Hello world")
})

app.get("/venues", (req, res) => {
  Venue.find({})
    .then(venues => {
      res.json(venues);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/venues/:id", (req, res) => {
  Venue.findOne({ _id: req.params.id })
    .then(venue => {
      res.json(venue);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/venues/new", (req, res) => {
  Venue.create(req.body)
    .then(venue => {
      res.json(venue);
    })
    .catch(err => {
      console.log(err);
    });
});

// app.listen(app.get("port"), () => {
//   console.log("Locked and loaded on " + app.get("port"));
// });

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})


