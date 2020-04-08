const mongoose = require("mongoose");

const QualificationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  Speciality: {
    type: String
  },
  Role: {
    type: String
  },
  InstitutionName: {
    type: String
  },
  Location: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("qualification", QualificationSchema);
