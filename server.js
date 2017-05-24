// set up ==================================================================
// Get all the tools we need
var express = require('express');
var app = express();
var port = 2000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

// configuration ===========================================================
mongoose.connect(configDB.url); // connect to the database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
	secret: 'imasecret'
}));
app.use(passport.initialize());
app.use(passport.session()); // presistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes =================================================================
require('./app/routes.js')(app, passport);

// launch =================================================================
app.listen(port);
console.log('Using port ' + port);
