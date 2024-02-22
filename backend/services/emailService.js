// Import necessary packages
const nodemailer = require('nodemailer');

// Define a function to handle form submission and email sending
const sendEmail = async (formData) => {
  try {
    // Extract form data
    const { name, email, message } = formData;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your SMTP settings here (e.g., host, port, secure)
      // For example, if you're using Gmail:
      service: 'gmail',
    });

    // Send an email using the form data
    await transporter.sendMail({
      from: email, // Using the user's email as the sender
      to: 'mohammedbakhshi@hotmail.com', // Your email address
      subject: 'New Message from Contact Form',
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    // Return success message
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    // Return error message
    return { success: false, message: 'Error sending email. Please try again later.' };
  }
};

// Export the function to make it accessible from other files
module.exports = {
  sendEmail,
};
