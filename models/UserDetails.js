const mongoose = require("mongoose");

const UserDetailsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  phone: {
    type: String
  },
  TaxID: {
    type: String
  },
  RegNo: {
    type: String
  },
  CRegNo: {
    type: String
  },
  GoogleKey: {
    type: String
  },
  ProfileImage: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("identification", UserDetailsSchema);
