const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  NotificationID: {
    type: String
  },
  NotificationType: {
    type: String
  },
  priority: {
    type: String
  },
  NotificationDate: {
    type: String
  },
  PharmaCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies"
  },
  PharmaName: {
    type: String
  },
  title: {
    type: String
  },
  body: {
    type: String
  },
  category: {
    type: String
  },
  badge: {
    type: String
  },
  style: {
    type: String
  },
  image: {
    type: String
  },
  link: {
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

module.exports = mongoose.model("notification", NotificationSchema);
