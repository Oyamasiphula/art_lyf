'use strict';

const nodemailer = require('nodemailer');
exports.sendMail = function(req, res, next) {
  async function main() {
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
      persons_name: input.name,
      personal_message: input.message
    };
    // Generate SMTP service account from ethereal.email
    let account = await nodemailer.createTestAccount();

    console.log('Credentials obtained, sending message...');

    // NB! Store the account object values somewhere if you want
    // to re-use the same account for future mail deliveries

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.USERNAME, // generated ethereal user
        pass: process.env.PASS // generated ethereal password
      },
      logger: false,
      debug: false // include SMTP traffic in the logs
    }, {
      // default message fields

      // sender info
      from: data.persons_name + '" 👻"'+ process.env.FROMMAIL, // sender address
      headers: {
        'X-Laziness-level': 1000 // just an example header, no need to use this
      }
    });

    // Message object
    let message = {
      to: process.env.MAILTOSENDTO, // list of receivers

      // Subject of the message
      subject: 'Art Life Clothing ✔',

      // plaintext body
      text: data.personal_message,

      // HTML body
      html: '<b>' + data.personal_message + '</b>'
    };

    let info = await transporter.sendMail(message);

    console.log('Message sent successfully!');
    console.log(nodemailer.getTestMessageUrl(info));

    // only needed when using pooled connections
    transporter.close();
  }
  main().catch(err => {
    console.error(err.message);
    process.exit(1);
  });
  next();
}
