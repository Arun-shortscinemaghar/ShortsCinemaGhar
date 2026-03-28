const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const Submission = require("../models/Submission");
const {
  sendContactEmail,
  sendSubmissionEmail,
} = require("../config/emailService");

router.post("/contact", async (req, res) => {
  let contact;
  try {
    contact = new Contact(req.body);
    await contact.save();

    // Send email separately
    try {
      await sendContactEmail(req.body);
    } catch (emailErr) {
      
    }

    // Always respond success if DB saved
    res.status(201).json({
      message: "Contact saved (email may or may not be sent)",
      contact,
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to save contact inquiry",
      details: err.message,
    });
  }
});
router.post("/submit", async (req, res) => {
  let submission;
  try {
    submission = new Submission(req.body);
    await submission.save();

    // Send email notification - if this fails, it will catch in the outer block
    await sendSubmissionEmail(req.body);

    res.status(201).json({
      message: "Film submission received and email sent successfully.",
      submission,
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to process film submission.",
      details: err.message,
      saved: !!submission,
    });
  }
});

module.exports = router;
