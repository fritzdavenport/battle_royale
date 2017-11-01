
let globals = require("../../globals.json");
const nodemailer = require("nodemailer");
let aws = require('aws-sdk');

class Notifier {
    static sendErrorMail(error, req){
        nodemailer.createTransport({SES: new aws.SES({apiVersion: '2010-12-01'})}).sendMail({
            from: globals.FROM_EMAIL_ADDRESS,
            to: globals.TO_EMAIL_ADDRESS,
            subject: "Battle Royale API Error",
            text: error.toString()+"\nOrder:\n"+JSON.stringify(req.params),
        }, (error, _) => { // now you're really fucked...
            if (error) { return console.log(error); }
        });
    }
}

export { Notifier }
