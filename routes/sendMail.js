var nodemailer = require('nodemailer');

exports.sendMail = function(req, res) {
  var input = JSON.parse(JSON.stringify(req.body));
  var data = {
    persons_name: input.name,
    personal_message: input.message
  };

  console.log("name :" + data.persons_name);
  console.log("message :" + data.personal_message);
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.USERNAME, // generated ethereal user
        pass: process.env.PASS // generated ethereal password
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: data.persons_name + '" 👻" <oyamasiphula@gmail.com>', // sender address
      to: process.env.MAILTOSENDTO, // list of receivers
      subject: 'Art Life Clothing ✔', // Subject line
      text: data.personal_message, // plain text body
      html: '<b>' + data.personal_message + '</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  });
}