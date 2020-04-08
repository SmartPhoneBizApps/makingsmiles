const mongoose = require("mongoose");

const StudySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  hcpEmail: {
    type: String
  },
  StudyID: {
    type: String
  },
  StudyName: {
    type: String
  },
  StudyType: {
    type: String
  },
  StudyStartDate: {
    type: String
  },
  StudyPhase: {
    type: String
  },
  StudyDetails: {
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

module.exports = mongoose.model("study", StudySchema);
