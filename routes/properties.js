var express = require('express');
var router = express.Router();

var Property = require('../models/propertymgr');

/* GET users listing. */
router.get('/', (req, res) => {
  Property.find({}, (err, trees) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(trees);
    }
  });
});

/* GET /api/trees/:id */
router.get('/:id', (req, res) => {

  Property.findById(req.params.id, (err, properties) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(properties);
    }
  });
});

router.delete('/:id', (req, res) => {
  Property.findByIdAndRemove(req.params.id, (err, properties) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send();
    }
  });

});

router.put('/:id', (req, res) => {

  // req.params.id --> docuemt id
  // req.body --> update obj

  Property.findByIdAndUpdate(req.params.id,  {$set: req.body},  {new: true}, (err, property) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(property);
    }
  });
});

router.post('/', (req, res) => {
  var property = new Property(req.body);
  property.save((err, saveProperty) => {

    if(err) {
      res.status(400).send(err);
    } else {
      res.send(saveProperty);
    }
  });
});

module.exports = router;
