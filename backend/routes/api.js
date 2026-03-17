const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const Submission = require('../models/Submission');

router.post('/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact inquiry received successfully.', contact });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save contact inquiry.', details: err.message });
  }
});

router.post('/submit', async (req, res) => {
  try {
    const submission = new Submission(req.body);
    await submission.save();
    res.status(201).json({ message: 'Film submission received successfully.', submission });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save film submission.', details: err.message });
  }
});

module.exports = router;
