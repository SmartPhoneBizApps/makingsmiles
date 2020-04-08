const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");
const hcpPerDetSchema = require("../models/Notification");
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
    NotificationID,
    NotificationType,
    priority,
    NotificationDate,
    PharmaCompany,
    PharmaName,
    title,
    body,
    category,
    badge,
    style,
    image,
    link,
    Status
  } = req.body;

  try {
    const comp = await companyData.find({ CompanyName : PharmaName }).sort({date: -1});
    console.log(comp[0].id);

    const newDetails = new hcpPerDetSchema({
      NotificationID,
      NotificationType,
      priority,
      NotificationDate,
      PharmaCompany: comp[0].id,
      PharmaName,
      title,
      body,
      category,
      badge,
      style,
      image,
      link,
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
    NotificationID,
    NotificationType,
    priority,
    NotificationDate,
    PharmaCompany,
    PharmaName,
    title,
    body,
    category,
    badge,
    style,
    image,
    link,
    Status
  } = req.body;

  // Build contact object
  const detailFields = {};
  
  if (NotificationID) detailFields.NotificationID = NotificationID;
  if (NotificationType) detailFields.NotificationType = NotificationType;
  if (priority) detailFields.priority = priority;
  if (NotificationDate) detailFields.NotificationDate = NotificationDate;
  if (title) detailFields.title = title;
  if (body) detailFields.body = body;
  if (category) detailFields.category = category;
  if (badge) detailFields.badge = badge;
  if (style) detailFields.style = style;
  if (image) detailFields.image = image;
  if (link) detailFields.link = link;
  if (Status) detailFields.Status = Status;
  if (PharmaCompany) detailFields.PharmaCompany = PharmaCompany;
  if (PharmaName) detailFields.PharmaName = PharmaName;
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
