const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");
const hcpPerDetSchema = require("../models/Study");
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
    StudyID,
    StudyName,
    StudyType,
    StudyStartDate,
    StudyPhase,
    PharmaCompany,
    PharmaName,
    StudyAddress,
    StudyDetails,
    TotalValue,
    RemainValue,
    Status
  } = req.body;

  try {
    const comp = await companyData.find({ CompanyName : PharmaName }).sort({date: -1});
    console.log(comp[0].id);
    const newDetails = new hcpPerDetSchema({
      StudyID,
      StudyName,
      StudyType,
      StudyStartDate,
      StudyPhase,
      PharmaCompany: comp[0].id,
      PharmaName,
      StudyAddress,
      StudyDetails,
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
    StudyID,
    StudyName,
    StudyType,
    StudyStartDate,
    StudyPhase,
    PharmaCompany,
    PharmaName,
    StudyAddress,
    StudyDetails,
    TotalValue,
    RemainValue,
    Status
  } = req.body;

  // Build contact object
  const detailFields = {};

  if (StudyID) detailFields.StudyID = StudyID;
  if (StudyName) detailFields.StudyName = StudyName;
  if (StudyType) detailFields.StudyType = StudyType;
  if (StudyStartDate) detailFields.StudyStartDate = StudyStartDate;
  if (StudyPhase) detailFields.StudyPhase = StudyPhase;
  if (PharmaCompany) detailFields.PharmaCompany = PharmaCompany;
  if (PharmaName) detailFields.PharmaName = PharmaName;
  if (StudyAddress) detailFields.StudyAddress = StudyAddress;
  if (StudyDetails) detailFields.StudyDetails = StudyDetails;
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
