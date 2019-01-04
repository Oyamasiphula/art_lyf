var express = require('express'),
  exphbs = require('express-handlebars'),
  bodyParser = require('body-parser'),
  nodemailer = require('nodemailer'),
  multer = require('multer'),
  upload = multer({
    dest: 'public/images/fashion_gallery/'
  }),
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

app.get('/', (req, res) => {
  res.render('home')
});

app.post('/projects', upload.single('picture_Url'), (req, res) => {
  var data = JSON.parse(JSON.stringify(req.body));
  let file_name = req.file.filename;

  var product = {
    picture_Url: 'images/fashion_gallery/' + file_name,
    Type: data.typeOfCloth,
    Size: data.size,
    Qty: data.qty,
    Price: data.price
  }
  clothes.push(product)
  res.redirect("/projects");
});

var t_shirt_List = [];
var long_sleeve_List = [];
var cap_List = [];
var categories = [];

app.get('/projects', (req, res) => {

  clothes.forEach(function(item) {
    if (item.Type === "TShirt") {
      categories.push({category: item.Type})
      t_shirt_List.push(item);
    }
    if (item.Type === "Long Sleeve") {
      categories.push({category: item.Type})
      long_sleeve_List.push(item);
    }
    if (item.Type === "Cap") {
      categories.push({category: item.Type})
      cap_List.push(item);
    }
  });

  res.render('projects', {
    tShirt: t_shirt_List,
    longSleeve: long_sleeve_List,
    cap: cap_List,
    categories : categories
  });
});

app.get('/contact', (req, res) => {
  res.render("contactMe");
});

app.post('/contact', emailUtility.sendMail, (req, res) => {
  res.render("sentSuccessfully");
});

app.get('/about', (req, res) => {
  res.render('aboutMe');
})
// <portSetup>port delcaration
var port = process.env.PORT || 5000
// </portSetup>

// <serveCodeBlocksRun>Lets configure our localhost server's port
app.listen(port, function() {
  console.log('app is listening on' + port);
});
// </serveCodeBlocksRun> : data.
