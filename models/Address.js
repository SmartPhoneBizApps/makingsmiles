const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  AddressLine1: {
    type: String
  },
  AddressLine2: {
    type: String
  },
  City: {
    type: String
  },
  State: {
    type: String
  },
  Postcode: {
    type: String
  },
  Country: {
    type: String
  },
  AddressType: {
    type: String
  },
  InUse: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("address", AddressSchema);
