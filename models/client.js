'use strict';

var mongoose = require('mongoose');

// History, Science, Angular
// var Client = mongoose.model('clientDB', {
//   name: String,
//   email: String,
//   phonenum: String,
//   otherinfo: String,
//   propertyref: [{type: mongoose.Schema.Types.ObjectId, ref: 'propertymgrDB'}]
// });

var clientShema = new mongoose.Schema({
  address: String,
  occupationstatus: String,
  rentprice: String,
  utilitiescost: String,
  otherinfo: String
});

var Client = mongoose.model('Client', clientShema);

module.exports = Client;
