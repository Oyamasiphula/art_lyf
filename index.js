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

var clothes = [{
  picture_Url: "images/fashion_gallery/tshirt.jpg",
  Type: "TShirt",
  Size: "XS",
  Qty: 1,
  Price: "R200"
}, {
  picture_Url: "images/fashion_gallery/Optimized-cap.JPG",
  Type: "Cap",
  Size: "M",
  Qty: 2,
  Price: "R200"
}, {
  picture_Url: "images/fashion_gallery/Optimized-long-sleeve.jpg",
  Type: "Long Sleeve",
  Size: "XL",
  Qty: 5,
  Price: "R400"
}];

app.get('/', function(req, res) {
  // console.log(products.getClothes());

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

app.post('/', emailUtility.sendMail, function(req, res) {

  res.render("sentSuccessfully");
});

app.post('/addProduct', function(req, res) {
  var data = JSON.parse(JSON.stringify(req.body));
  console.log(data);
  var product = {
    picture_Url: "images/fashion_gallery/" + data.pictureUrl,
    Type: data.typeOfCloth,
    Size: data.size,
    Qty: data.qty,
    Price: data.price
  }
  clothes.push(product)
  console.log(clothes);
  res.redirect("/");
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
// </serveCodeBlocksRun> : data.
