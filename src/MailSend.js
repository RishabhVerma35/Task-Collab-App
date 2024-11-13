import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Create a transporter using Mailtrap's SMTP server settings
let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,  // You can also use 2525
  auth: {
    user: process.env.MAILTRAP_USER, 
    pass: process.env.MAILTRAP_PASSWORD
  }
});

// Setup email data
let mailOptions = {
  from: '"Your Name" <youremail@example.com>',  // Sender address
  to: "recipient@example.com",  // List of recipients
  subject: "Test Email from Mailtrap",  // Subject line
  text: "This is a test email sent via Mailtrap.",  // Plain text body
  html: "<b>This is a test email sent via Mailtrap.</b>"  // HTML body (optional)
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error occurred:", error);
  } else {
    console.log("Message sent:", info.messageId);
  }
});
