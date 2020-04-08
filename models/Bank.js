const mongoose = require("mongoose");


const BankSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  HolderName: {
    type: String
  },
  BankKey: {
    type: String
  },
  AccountNo: {
    type: String
  },
  IBAN: {
    type: String
  },
  SWIFTCode: {
    type: String
  },
  BankName: {
    type: String
  },
  BankBranch: {
    type: String
  },
  BankAddress: {
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

module.exports = mongoose.model("bank", BankSchema);
