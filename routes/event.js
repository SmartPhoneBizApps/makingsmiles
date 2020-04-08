const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");
const hcpPerDetSchema = require("../models/Event");
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
    EventID,
    EventName,
    EventType,
    EventStartDate,
    Time,
    Duration,
    PharmaCompany,
    PharmaName,
    EventAddress,
    Agenda,
    TotalValue,
    RemainValue,
    Status
  } = req.body;



  try {
    //Find Pharma Company
    const comp = await companyData.find({ CompanyName : PharmaName }).sort({date: -1});
    console.log(comp[0].id);

    const newDetails = new hcpPerDetSchema({
      EventID,
      EventName,
      EventType,
      EventStartDate,
      Time,
      Duration,
      PharmaCompany:comp[0].id,
      PharmaName,
      EventAddress,
      Agenda,
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
    EventID,
    EventName,
    EventType,
    EventStartDate,
    Time,
    Duration,
    PharmaCompany,
    PharmaName,
    EventAddress,
    Agenda,
    TotalValue,
    RemainValue,
    Status
  } = req.body;

  // Build contact object
  const detailFields = {};

  if (EventID) detailFields.EventID = EventID;
  if (EventName) detailFields.EventName = EventName;
  if (EventType) detailFields.EventType = EventType;
  if (EventStartDate) detailFields.EventStartDate = EventStartDate;
  if (Time) detailFields.Time = Time;
  if (Duration) detailFields.Duration = Duration;
  if (PharmaCompany) detailFields.PharmaCompany = PharmaCompany;
  if (PharmaName) detailFields.PharmaName = PharmaName;
  if (EventAddress) detailFields.EventAddress = EventAddress;
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
