const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");
const hcpPerDetSchema = require("../models/Address");

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

  const { AddressLine1,AddressLine2,City,State,Postcode,Country,AddressType,InUse } = req.body;

  try {
    const newDetails = new hcpPerDetSchema({
      AddressLine1,AddressLine2,City,State,Postcode,Country,AddressType,InUse,
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
  const { AddressLine1,AddressLine2,City,State,Postcode,Country,AddressType,InUse } = req.body;

  // Build contact object
  const detailFields = {};

  if (AddressLine1) detailFields.AddressLine1 = AddressLine1;
  if (AddressLine2) detailFields.AddressLine2 = AddressLine2;
  if (City) detailFields.City = City;
  if (State) detailFields.IBAN = State;
  if (Postcode) detailFields.Postcode = Postcode;
  if (Country) detailFields.Country = Country;
  if (AddressType) detailFields.AddressType = AddressType;
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
