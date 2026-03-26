import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

// MongoDB Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  institution: { type: String, required: true },
  city: { type: String, required: true },
  type: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Get or create model
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

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

async function sendContactEmail(contactData) {
  const transporter = createTransporter();
  if (!transporter || !process.env.RECEIVER_EMAIL) {
    console.log('Email not configured, skipping email send');
    return;
  }

  const mailOptions = {
    from: `"${contactData.name}" <${process.env.EMAIL_USER}>`,
    replyTo: contactData.email,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact Inquiry from ${contactData.name}`,
    text: `
      You have a new contact inquiry:
      
      Name: ${contactData.name}
      Email: ${contactData.email}
      Phone: ${contactData.phone}
      Institution: ${contactData.institution}
      City: ${contactData.city}
      Type: ${contactData.type}
      Message: ${contactData.message}
    `,
    html: `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Phone:</strong> ${contactData.phone}</p>
      <p><strong>Institution:</strong> ${contactData.institution}</p>
      <p><strong>City:</strong> ${contactData.city}</p>
      <p><strong>Type:</strong> ${contactData.type}</p>
      <p><strong>Message:</strong> ${contactData.message}</p>
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
    
    const contact = new Contact(req.body);
    await contact.save();

    // Try to send email (non-blocking)
    try {
      await sendContactEmail(req.body);
    } catch (emailErr) {
      console.log('Email failed:', emailErr.message);
    }

    return res.status(201).json({
      message: 'Contact saved successfully',
      contact,
    });
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({
      error: 'Failed to save contact inquiry',
      details: err.message,
    });
  }
}
