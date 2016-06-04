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

var clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phonenum: String,
  otherinfo: String,
  propertyref: [{type: mongoose.Schema.Types.ObjectId, ref: 'propertymgrDB'}]
});

var Client = mongoose.model('Client', clientSchema);

module.exports = Client;
