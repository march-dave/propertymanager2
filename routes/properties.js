var express = require('express');
var router = express.Router();

// var Tree = require('../models/tree');
var Flashcard = require('../models/propertymgr');

// GET /api/trees   ===> return array of all trees
// GET /api/trees/id  ===> return one tree by id
// POST /api/trees  ===> create a new tress

/* GET users listing. */
router.get('/', (req, res) => {
  Flashcard.find({}, (err, trees) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(trees);
    }
  });
});

/* GET /api/trees/:id */
router.get('/:id', (req, res) => {

  Flashcard.findById(req.params.id, (err, flashcards) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(flashcards);
    }
  });
});

router.delete('/:id', (req, res) => {
  Flashcard.findByIdAndRemove(req.params.id, (err, flashcards) => {
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

  Flashcard.findByIdAndUpdate(req.params.id,  {$set: req.body},  {new: true}, (err, flashcard) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(flashcard);
    }
  });
});

router.post('/', (req, res) => {
  var flashcard = new Flashcard(req.body);
  flashcard.save((err, saveFlashcard) => {

    if(err) {
      res.status(400).send(err);
    } else {
      res.send(saveFlashcard);
    }
  });
});

module.exports = router;
