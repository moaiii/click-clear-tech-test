var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var v1 = require('./routes/v1');
var app = express();
var path = require('path');


/** @describe view engine - not used in this example */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


/** @describe misc middleware */
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


/** @describe api versioning */
app.use('/api/v1', v1);


/** @describe error handlers */ 
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
