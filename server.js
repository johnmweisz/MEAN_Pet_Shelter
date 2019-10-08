var express = require('express');
var session = require('express-session');
var flash = require('express-flash');
var app = express();
var bodyParser = require('body-parser');
require('./server/config/mongoose.js');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public'));
app.use(session({
	secret: 'secretkey1298375619843756',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}));
app.use(flash());

require('./server/config/routes.js')(app);
app.all("*", (req,res,next) => {res.sendFile(path.resolve("./public/dist/public/index.html"))});

const port = '8000';
app.listen(port, function() {console.log(`listening on port ${port}`)});