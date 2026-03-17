const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  duration: { type: String, required: true },
  language: { type: String, required: true },
  synopsis: { type: String, required: true },
  posterUrl: { type: String }, // Assuming a URL or file path might be provided
  screeningLink: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', submissionSchema);
