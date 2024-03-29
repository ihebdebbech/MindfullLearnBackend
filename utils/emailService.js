import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iheb.debbetn',
        pass: 'dhdhdjcj'
    }
});

function sendForgotPasswordEmail(email) {
    const randCode = Math.floor(Math.random() * 1000);
    const mailOptions = {
        from: 'iheblemeilleur45@gmail.com',
        to: email,
        subject: 'Forgot Password Code',
        text: 'Code : ' + randCode
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log("Email sent")
            console.log('Email sent: ' + info.response);
        }
    });

    return randCode;
}
function sendReclamationEmail(email) {
    const randCode = Math.floor(Math.random() * 1000);
    const mailOptions = {
        from: 'iheblemeilleur45@gmail.com',
        to: email,
        subject: 'Forgot Password Code',
        text: 'Code : ' + randCode
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log("Email sent")
            console.log('Email sent: ' + info.response);
        }
    });

    return randCode;
}
function sendTestEmail() {
    const mailOptions = {
        from: 'iheblemeilleur45@gmail.com',
        to: 'ihebdebbech20@gmail.com',
        subject: 'Hello from Node.js',
        text: 'This is a test email sent from Node.js.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export {sendTestEmail, sendForgotPasswordEmail,sendReclamationEmail};
