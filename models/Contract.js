const mongoose = require("mongoose");

const ContractSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  ContractID: {
    type: String
  },
  ContractName: {
    type: String
  },
  ContractType: {
    type: String
  },
  ContractStartDate: {
    type: String
  },
  ContractEndDate: {
    type: String
  },
  Services: {
    type: String
  },
  ContractLink: {
    type: String
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

module.exports = mongoose.model("contract", ContractSchema);
