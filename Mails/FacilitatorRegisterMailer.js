import {transporter} from "./setup.js";

const facilitatorRegisterMailer = async (facilitator) => {
    try{
        let info = await transporter.sendMail({
            from: process.env.MAIL_FROM_NAME + ' <' + process.env.MAIL_FROM_EMAIL +'>',
            to: facilitator.email,
            subject: "Facilitator Registration",
            text: "New Facilitator Registration",
            html: "<b>Hello " + facilitator.name + "</b>, <p>Welcome to our app </p>",
        });

        console.log("Message sent: %s", info.messageId);
    }
    catch (error) {
        console.log('Mail Error: ', error)
    }
}


export { facilitatorRegisterMailer }
