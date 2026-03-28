const nodemailer = require('nodemailer');
const dns = require('dns');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

const sendContactEmail = async (contactData) => {
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
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

const sendSubmissionEmail = async (submissionData) => {
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
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = { sendContactEmail, sendSubmissionEmail };


