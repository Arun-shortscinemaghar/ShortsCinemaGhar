require('dotenv').config();
const { sendContactEmail } = require('./config/emailService');

const testContact = {
  name: "Test User",
  email: "test@example.com",
  phone: "1234567890",
  institution: "Test Inst",
  city: "Test City",
  type: "General Inquiry",
  message: "This is a test message from nodalmailer setup."
};

async function runTest() {
  console.log("Starting email test...");
  try {
    await sendContactEmail(testContact);
    console.log("Test email sent successfully! Please check your inbox (or the credentials you provided).");
  } catch (error) {
    if (error.code === 'EAUTH') {
        console.error("\n[TEST FAILED]: Authentication Error. Have you updated your .env with valid credentials?");
    } else {
        console.error("\n[TEST FAILED]:", error.message);
    }
  }
}

runTest();
