'use strict';

var mongoose = require('mongoose');

// History, Science, Angular
var Client = mongoose.model('clientDB', {
  name: String,
  email: String,
  phonenum: String,
  otherinfo: String
});


module.exports = Client;
