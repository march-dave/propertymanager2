'use strict';

var mongoose = require('mongoose');

// History, Science, Angular
// var Propertymgr = mongoose.model('propertymgrDB', {
//   address: String,
//   occupationstatus: String,
//   rentprice: String,
//   utilitiescost: String,
//   otherinfo: String
// });

var propertymgrShema = new mongoose.Schema({
  address: String,
  occupationstatus: String,
  rentprice: String,
  utilitiescost: String,
  otherinfo: String

});

var Propertymgr = mongoose.model('Propertymgr', propertymgrShema)
module.exports = Propertymgr;
