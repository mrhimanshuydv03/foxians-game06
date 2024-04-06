const nodemailer = require('nodemailer');

// Function to send email with OTP
async function sendMail(formData) {
    console.log(formData)
    // Initialize Nodemailer transporter
    const transporter = nodemailer.createTransport({
        // Your email configuration
        service: "gmail",
        auth: {
            user: "himanshu2023rao@gmail.com",
            pass: "kwatuzexzelcttje",
        }
    });

    // Email content
    const mailOptions = {
        from: "himanshu2023rao@gmail.com",
        to: formData.emu,
        subject: "OTP for Registration Foxian Game" ,
        text: `Your OTP for registration is: ${formData.otp}`
    };

    // Send email
    const res = await transporter.sendMail(mailOptions);
    
}

module.exports = sendMail;



