'use strict';

var mongoose = require('mongoose');

var propertymgrShema = new mongoose.Schema({
  address: String,
  occupationstatus: String,
  rentprice: String,
  utilitiescost: String,
  otherinfo: String
});

var Propertymgr = mongoose.model('Propertymgr', propertymgrShema)
module.exports = Propertymgr;
