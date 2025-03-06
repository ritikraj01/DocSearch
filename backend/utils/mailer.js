const nodemailer = require("nodemailer");

const sendBookingNotification = async (email, name, slotTime) => {
    try {
        
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS,
            }
        });

    
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Slot Booking Confirmation",
            html: `
                <h3>Hello ${name},</h3>
                <p>Your slot has been successfully booked.</p>
                <p><strong>Slot Time:</strong> ${slotTime}</p>
                <p>Thank you for using our service!</p>
                <br>
                <p>Regards,</p>
                <p>DocSearch Team</p>
            `
        };

        
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: ", info.response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

module.exports = sendBookingNotification;
