var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itemsRouter = require('./routes/Items');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

//DB config
const db = require('./config/keys').mongoURI;
//connect to mongodb
mongoose.connect(db)


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', itemsRouter);

module.exports = app;
