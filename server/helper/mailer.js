require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    secure: false,
    requireTLS: true,
    auth:{
        user: process.env.SMPT_MAIL,
        pass: process.env.SMPT_PASSWORD
    }
})

const sendMail = async(email,subject,content)=>{
    try {
        var mailOptions = {
            from: process.env.SMPT_MAIL,
            to: email,
            subject: subject,
            html: content
        }
        await transporter.sendMail(mailOptions) 
    } catch (error) {
        console.log(error);
    }
}
module.exports={sendMail}