var express = require('express'),
  exphbs = require('express-handlebars'),
  bodyParser = require('body-parser'),
  nodemailer = require('nodemailer'),
  emailUtility = require('./routes/sendMail'),
  products = require('./routes/product');

var app = express();

// <layout> basic setup template handlebars as the template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
// </layout>

// middleware below
// ...code
// middleware above
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
// parse application/json
app.use(bodyParser.json())
// <requests> now lets get ready for requests
// app.get("/", products.home)
app.get('/', function(req, res) {
  // console.log(products.getClothes());
  var clothes = [{
    picture_Url: "images/fashion_gallery/tshirt.jpg",
    Type: "TShirt",
    Price: "R200",
    Size: "XS",
    Qty: 1
  }, {
    picture_Url: "images/fashion_gallery/Optimized-cap.JPG",
    Type: "Cap",
    Price: "R200",
    Size: "M",
    Qty: 2
  }, {
    picture_Url: "images/fashion_gallery/Optimized-long-sleeve.jpg",
    Type: "Long Sleeve",
    Price: "R400",
    Size: "XL",
    Qty: 5
  }];

  var t_shirt_List = [];
  var long_sleeve_List = [];
  var cap_List = [];

  clothes.forEach(function(item) {
    if (item.Type === "TShirt") {
      t_shirt_List.push(item);
    }
    if (item.Type === "Long Sleeve") {
      long_sleeve_List.push(item);
    }
    if (item.Type === "Cap") {
      cap_List.push(item);
    }
  })

  res.render('home', {
    tShirt: t_shirt_List,
    longSleeve: long_sleeve_List,
    cap: cap_List
  });
})

app.post('/', function(req, res, next) {
  var input = JSON.parse(JSON.stringify(req.body));
  async function main() {

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
      from: data.persons_name + '" 👻"' + process.env.FROMMAIL, // sender address
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

  res.send("recieved your request!");
});
app.get('about', function(req, res) {
  res.render('about');

})
// <portSetup>port delcaration
var port = process.env.PORT || 5000
// </portSetup>

// <serveCodeBlocksRun>Lets configure our localhost server's port
app.listen(port, function() {
  console.log('app is listening on' + port);
});
// </serveCodeBlocksRun>
