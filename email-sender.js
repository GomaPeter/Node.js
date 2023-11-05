// This line import the "nodemailer" library
const nodemailer = require('nodemailer');

async function sendEmail() {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-password'
        }
    });

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient-email@gmail.com',
        subject: 'Hello from Nodemailer!',
        text: 'Hello, this is a test email from Nodemailer using Gmail!'
    };

    await transporter.sendMail(mailOptions);
}

sendEmail().catch(console.error);