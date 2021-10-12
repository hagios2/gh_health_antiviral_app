import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config({ path: './config/.env'})


let transporter = nodemailer.createTransport({
    // host: process.env.MAIL_HOST,
    // port: process.env.MAIL_PORT,
    // secure: false,
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});


export { transporter }