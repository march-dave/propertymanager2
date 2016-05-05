var express = require('express');
var router = express.Router();

var Client = require('../models/client');

  router.route('/')
    .get((req, res) => {
      Client.find({}, (err, trees) => {
          if(err) {
            res.status(400).send(err);
          } else {
            res.send(trees);
          }
        });
    })
    .post((req, res) => {
      var client = new Client(req.body);
      client.save((err, savedClient) => {
        res.status(err ? 400 : 200).send(err || savedClient);
      });
  })

  router.route('/:id')
    .get((req, res) => {
      Client.findById(req.params.id, (err, client) => {
        res.status(err ? 400 : 200).send(err || client);
      });
    })
    .delete((req, res) => {
      Client.findByIdAndRemove(req.params.id, (err, client) => {
        res.status(err ? 400 : 200).send(err);
      });
    })
    .put((req, res) => {
      Client.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, client) => {
        res.status(err ? 400 : 200).send(err || client);
      });
    })

module.exports = router;
