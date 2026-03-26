import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

// MongoDB Submission Schema
const submissionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  duration: { type: String, required: true },
  language: { type: String, required: true },
  synopsis: { type: String, required: true },
  email: { type: String, required: true },
  posterUrl: { type: String },
  screeningLink: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Get or create model
const Submission = mongoose.models.Submission || mongoose.model('Submission', submissionSchema);

// MongoDB connection
let cachedConnection = null;

async function connectDB() {
  if (cachedConnection) {
    return cachedConnection;
  }
  
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI environment variable is not set');
  }
  
  cachedConnection = await mongoose.connect(process.env.MONGO_URI);
  return cachedConnection;
}

// Email transport
function createTransporter() {
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return null;
  }
  
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

async function sendSubmissionEmail(submissionData) {
  const transporter = createTransporter();
  if (!transporter || !process.env.RECEIVER_EMAIL) {
    console.log('Email not configured, skipping email send');
    return;
  }

  const mailOptions = {
    from: `"${submissionData.director}" <${process.env.EMAIL_USER}>`,
    replyTo: submissionData.email,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Film Submission: ${submissionData.title}`,
    text: `
      You have a new film submission:
      
      Title: ${submissionData.title}
      Director: ${submissionData.director}
      Duration: ${submissionData.duration}
      Language: ${submissionData.language}
      Synopsis: ${submissionData.synopsis}
      Email: ${submissionData.email}
      Screening Link: ${submissionData.screeningLink}
    `,
    html: `
      <h2>New Film Submission</h2>
      <p><strong>Title:</strong> ${submissionData.title}</p>
      <p><strong>Director:</strong> ${submissionData.director}</p>
      <p><strong>Duration:</strong> ${submissionData.duration}</p>
      <p><strong>Language:</strong> ${submissionData.language}</p>
      <p><strong>Synopsis:</strong> ${submissionData.synopsis}</p>
      <p><strong>Email:</strong> ${submissionData.email}</p>
      <p><strong>Screening Link:</strong> ${submissionData.screeningLink}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await connectDB();
    
    const submission = new Submission(req.body);
    await submission.save();

    // Try to send email
    try {
      await sendSubmissionEmail(req.body);
    } catch (emailErr) {
      console.log('Email failed:', emailErr.message);
    }

    return res.status(201).json({
      message: 'Film submission received successfully',
      submission,
    });
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({
      error: 'Failed to process film submission',
      details: err.message,
    });
  }
}
