const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");
const hcpPerDetSchema = require("../models/Contract");
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
    ContractID,
    ContractName,
    ContractType,
    ContractStartDate,
    ContractEndDate,
    Services,
    ContractLink,
    PharmaCompany,
    PharmaName,
    TotalValue,
    RemainValue,
    Status
  } = req.body;

  try {

    const comp = await companyData.find({ CompanyName : PharmaName }).sort({date: -1});
    console.log(comp[0].id);

    const newDetails = new hcpPerDetSchema({
      ContractID,
      ContractName,
      ContractType,
      ContractStartDate,
      ContractEndDate,
      Services,
      ContractLink,
      PharmaCompany: comp[0].id,
      PharmaName,
      TotalValue,
      RemainValue,
      Status,
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
    ContractID,
    ContractName,
    ContractType,
    ContractStartDate,
    ContractEndDate,
    Services,
    ContractLink,
    PharmaCompany,
    PharmaName,
    TotalValue,
    RemainValue,
    Status
  } = req.body;

  // Build contact object
  const detailFields = {};

  if (ContractID) detailFields.ContractID = ContractID;
  if (ContractName) detailFields.ContractName = ContractName;
  if (ContractType) detailFields.ContractType = ContractType;
  if (ContractStartDate) detailFields.ContractStartDate = ContractStartDate;
  if (ContractEndDate) detailFields.ContractEndDate = ContractEndDate;
  if (ContractLink) detailFields.ContractLink = ContractLink;
  if (Services) detailFields.Services = Services;
  if (PharmaCompany) detailFields.PharmaCompany = PharmaCompany;
  if (PharmaName) detailFields.PharmaName = PharmaName;
  if (ContractAddress) detailFields.ContractAddress = ContractAddress;
  if (Agenda) detailFields.Agenda = Agenda;
  if (TotalValue) detailFields.TotalValue = TotalValue;
  if (RemainValue) detailFields.RemainValue = RemainValue;
  if (Status) detailFields.Status = Status;
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
