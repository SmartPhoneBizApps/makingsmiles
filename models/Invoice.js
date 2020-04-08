const mongoose = require("mongoose");

const InvoiceSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  InvoiceID: {
    type: String
  },
  InvoiceType: {
    type: String
  },
  InvoiceDate: {
    type: String
  },
  InvoiceNumber: {
    type: String
  },
  TaxInvoice: {
    type: String
  },
  NetValue: {
    type: String
  },
  TaxValue: {
    type: String
  },
  TaxRate: {
    type: String
  },
  GrossValue: {
    type: String
  },
  Currency: {
    type: String
  },
  Reference: {
    type: String
  },
  ContractID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "contracts"
  },
  EventID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "events"
  },
  POID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "purchaseorders"
  },
  StudyID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "studies"
  },
  PharmaCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies"
  },
  PharmaName: {
    type: String
  },
  CompanyID: {
    type: String
  },
  Comments: {
    type: String
  },
  Attachments: {
    type: String
  },
  PaymentTerm: {
    type: String
  },
  PaymentStatus: {
    type: String
  },
  Status: {
    type: String
  },
  Items: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("invoice", InvoiceSchema);
