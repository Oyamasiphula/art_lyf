var express = require('express'),
  exphbs = require('express-handlebars'),
  bodyParser = require('body-parser'),
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
    uploadPicture: URL,
    Type: "TShirt",
    Price: "R200",
    Size: "XS",
    Qty: "2"
  }, {
    uploadPicture: URL,
    Type: "Cap",
    Price: "R200",
    Size: "M",
    Qty: "2"
  }, {
    uploadPicture: URL,
    Type: "Long Sleeve",
    Price: "R400",
    Size: "XL",
    Qty: "2"
  }];
  res.render('home');
})

app.post('/', function(req, res){
  var input = JSON.parse(JSON.stringify(req.body));
	var data = {
		persons_name: input.name,
		personal_message: input.message
	};

  console.log("name :" + data.persons_name);
  console.log("message :" + data.personal_message);
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
