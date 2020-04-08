const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");
const hcpPerDetSchema = require("../models/Invoice");
const companyData = require("../models/Company");

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private
router.get("/", auth, async (req, res) => {
  try {
    const hcpDatalist = await hcpPerDetSchema.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(hcpDatalist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/userDetails
// @desc      Add new contact
// @access    Private
router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    InvoiceID,
    InvoiceType,
    InvoiceNumber,
    InvoiceDate,
    PharmaCompany,
    PharmaName,
    TaxInvoice,
    NetValue,
    TaxValue,
    TaxRate,
    GrossValue,
    Currency,
    Reference,
    ContractID,
    EventID,
    POID,
    StudyID,
    CompanyID,
    Comments,
    Attachments,
    PaymentTerm,
    PaymentStatus,
    Status,
    Items
  } = req.body;

  try {

    const comp = await companyData.find({ CompanyName : PharmaName }).sort({date: -1});
    //console.log(comp[0].id);
    console.log(comp);
    console.log(PharmaName);
    const newDetails = new hcpPerDetSchema({
      InvoiceID,
      InvoiceType,
      InvoiceNumber,
      InvoiceDate,
      PharmaCompany:comp[0].id,
      PharmaName,
      TaxInvoice,
      NetValue,
      TaxValue,
      TaxRate,
      GrossValue,
      Currency,
      Reference,
      ContractID,
      EventID,
      POID,
      StudyID,
      CompanyID,
      Comments,
      Attachments,
      PaymentTerm,
      PaymentStatus,
      Status,
      Items,
      user: req.user.id
    });

    const detail = await newDetails.save();

    res.json(detail);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     PUT api/contacts/:id
// @desc      Update contact
// @access    Private
router.put("/:id", auth, async (req, res) => {
  const {
    InvoiceID,
    InvoiceType,
    InvoiceNumber,
    InvoiceDate,
    PharmaCompany,
    PharmaName,
    TaxInvoice,
    NetValue,
    TaxValue,
    TaxRate,
    GrossValue,
    Currency,
    Reference,
    ContractID,
    EventID,
    POID,
    StudyID,
    CompanyID,
    Comments,
    Attachments,
    PaymentTerm,
    PaymentStatus,
    Status,
    Items
  } = req.body;

  // Build contact object
  const detailFields = {};

  if (InvoiceID) detailFields.InvoiceID = InvoiceID;
  if (InvoiceType) detailFields.InvoiceType = InvoiceType;
  if (InvoiceNumber) detailFields.InvoiceNumber = InvoiceNumber;
  if (InvoiceDate) detailFields.InvoiceDate = InvoiceDate;
  if (TaxInvoice) detailFields.TaxInvoice = TaxInvoice;
  if (NetValue) detailFields.NetValue = NetValue;
  if (TaxValue) detailFields.TaxValue = TaxValue;
  if (TaxRate) detailFields.TaxRate = TaxRate;
  if (GrossValue) detailFields.GrossValue = GrossValue;
  if (Currency) detailFields.Currency = Currency;
  if (Reference) detailFields.Reference = Reference;
  if (ContractID) detailFields.ContractID = ContractID;
  if (EventID) detailFields.EventID = EventID;
  if (POID) detailFields.POID = POID;
  if (StudyID) detailFields.StudyID = StudyID;
  if (Status) detailFields.Status = Status;
  if (PharmaCompany) detailFields.PharmaCompany = PharmaCompany;
  if (PharmaName) detailFields.PharmaName = PharmaName;
  if (CompanyID) detailFields.CompanyID = CompanyID;
  if (Comments) detailFields.Comments = Comments;
  if (Attachments) detailFields.Attachments = Attachments;

  if (PaymentTerm) detailFields.PaymentTerm = PaymentTerm;
  if (PaymentStatus) detailFields.PaymentStatus = PaymentStatus;
   detailFields.Items = Items;

  try {
    let detail = await hcpPerDetSchema.findById(req.params.id);

    if (!detail) return res.status(404).json({ msg: "Record not found" });

    // Make sure user owns contact
    if (detail.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    detail = await hcpPerDetSchema.findByIdAndUpdate(
      req.params.id,
      { $set: detailFields },
      { new: true }
    );

    res.json(detail);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     DELETE api/contacts/:id
// @desc      Delete contact
// @access    Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let detail = await hcpPerDetSchema.findById(req.params.id);

    if (!detail) return res.status(404).json({ msg: "Record not found" });

    // Make sure user owns contact
    if (detail.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await hcpPerDetSchema.findByIdAndRemove(req.params.id);

    res.json({ msg: "Record removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
