const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");
const hcpPerDetSchema = require("../models/Bank");

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

  const { HolderName,
    BankKey,
    AccountNo,
    IBAN,
    SWIFTCode,
    BankName,
    BankBranch,
    BankAddress,
    InUse } = req.body;

  try {
    const newDetails = new hcpPerDetSchema({
      HolderName,
  BankKey,
  AccountNo,
  IBAN,
  SWIFTCode,
  BankName,
  BankBranch,
  BankAddress,
  InUse,
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
  const { HolderName,
    BankKey,
    AccountNo,
    IBAN,
    SWIFTCode,
    BankName,
    BankBranch,
    BankAddress,
    InUse } = req.body;

  // Build contact object
  const detailFields = {};

  if (BankKey) detailFields.BankKey = BankKey;
  if (HolderName) detailFields.HolderName = HolderName;
  if (AccountNo) detailFields.AccountNo = AccountNo;
  if (IBAN) detailFields.IBAN = IBAN;
  if (SWIFTCode) detailFields.SWIFTCode = SWIFTCode;
  if (BankName) detailFields.BankName = BankName;
  if (BankBranch) detailFields.BankBranch = BankBranch;
  if (BankAddress) detailFields.BankAddress = BankAddress;
  if (InUse) detailFields.InUse = InUse;
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
