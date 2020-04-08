const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  EventID: {
    type: String
  },
  EventName: {
    type: String
  },
  EventType: {
    type: String
  },
  EventStartDate: {
    type: String
  },
  Time: {
    type: String
  },
  Duration: {
    type: String
  },
  PharmaCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies"
  },
  PharmaName: {
    type: String
  },
  EventAddress: {
    type: String
  },
  Agenda: {
    type: String
  },
  TotalValue: {
    type: String
  },
  RemainValue: {
    type: String
  },
  Status: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("event", EventSchema);
