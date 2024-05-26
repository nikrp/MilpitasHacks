const nodemailer = require('nodemailer');

async function sendEmail(recEmail, password) {
    const myEmail = 'wecommunity525@gmail.com';
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: myEmail,
            pass: password
        }
    });

    let info = await transporter.sendMail({
        from: myEmail,
        to: recEmail,
        subject: 'WeCommunity: Welcome to WeCommunity',
        text: 'Organizing your charity drives since 2011.'
    });

    console.log('Message sent: %s', info.messageId);
}


const recEmail = 'spicypitato1234@gmail.com';
const password = 'opym bzos geia qkmt';

sendEmail(recEmail, password).catch(console.error);
