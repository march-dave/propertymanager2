'use strict';

var mongoose = require('mongoose');

// History, Science, Angular
var Propertymgr = mongoose.model('propertymgrDB', {
  address: String,
  occupationstatus: String,
  rentprice: String,
  utilitiescost: String,
  otherinfo: String
});

module.exports = Propertymgr;
