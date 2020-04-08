const mongoose = require("mongoose");

const POSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  POID: {
    type: String
  },
  POType: {
    type: String
  },
  PODate: {
    type: String
  },
  PTerm: {
    type: String
  },
  PharmaCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies"
  },
  PharmaCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies"
  },
  PharmaName: {
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

module.exports = mongoose.model("purchaseorder", POSchema);
