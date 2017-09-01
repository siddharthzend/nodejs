var express = require('express');
var path = require('path');
var index = require('./routes/index');
//var tweets = require('./routes/tweets');
var app = express();
var bodyParser = require('body-parser')
var passport = require('passport');
var expressSession = require('express-session');
var LocalStrategy = require('passport-local').Strategy;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// serve static assets from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// look for view html in the views directory
app.set('views', path.join(__dirname, 'views'));

// use ejs to render 
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


// setup routes
app.use('/', index);
app.use('/getallvideos', index);
app.use('/getuniquevideo', index);
app.use('/fakeall', index);
app.use('/deletephoto', index);
app.use('/getphotos', index);
//app.use('/dowork', index);
//app.use('/signup', index);
//app.use('/register', index);



module.exports = app;

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
