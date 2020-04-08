const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema({
  CompanyName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String
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
  status: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("company", CompanySchema);
