// Send email notification
const sendEmailNotification = async (contactData) => {
  if (
    !process.env.EMAIL_HOST ||
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASS
  ) {
    console.log("Email not configured, skipping...");
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,     // smtp.gmail.com
      port: process.env.EMAIL_PORT || 465,                        // SSL PORT (IMPORTANT FOR RENDER)
      secure: true,                     // true = SSL
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
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Email sending failed:", error.message);
  }
};
