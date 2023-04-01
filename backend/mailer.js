
const nodemailer = require("nodemailer");

async function main() {

let testAccount = await nodemailer.createTestAccount();

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "jayda60@ethereal.email ", // generated ethereal user
    pass: 'Q3Njw4KQn236CCXGjr', // generated ethereal password
  },
});

// send mail with defined transport object
let info = await transporter.sendMail({
  from: '"Sakshat" <jayda60@ethereal.email>', // sender address
  to: "Ettie,ettie.effertz@ethereal.email", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "HI your website has been banned because of obscene content on it pls look into the matter and once resolved apeal for unblocking at http://localhost:3000/apeal", // plain text body
});

console.log("Message sent: %s", info.messageId);
// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
main().catch(console.error);