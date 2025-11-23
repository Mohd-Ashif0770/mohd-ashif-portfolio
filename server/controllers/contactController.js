const { validationResult } = require('express-validator');
const ContactMessage = require('../models/ContactMessage');
const nodemailer = require('nodemailer');

// Send email notification (optional)
const sendEmailNotification = async (contactData) => {
  if (
    !process.env.EMAIL_HOST ||
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASS
  ) {
    return; // Skip if email not configured
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${contactData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Email sending failed:', error.message);
    // Don't fail the request if email fails
  }
};

// Submit contact form
exports.submitContact = async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, message } = req.body;

    // Save to database
    const contactMessage = new ContactMessage({
      name,
      email: email || '',
      phone: phone || '',
      message,
    });

    await contactMessage.save();

    // Send email notification (optional, non-blocking)
    await sendEmailNotification(contactMessage);

    res.status(201).json({
      message: 'Thank you for your message! I will get back to you soon.',
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

