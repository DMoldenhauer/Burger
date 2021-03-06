var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgers = require("../models/burger.js");
// var path = require("path");


router.get('/', function(req, res) {
  burgers.all(function(data) {

    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);

  });
});

router.post('/api/newburgers/:burger_name', function(req, res) {
  burgers.create(req.params.name, function(data) {
    res.json ({ burger_name : name });
  });
});

router.put('/api/burgers/:id', function(req, res) {
  burgers.updateOne( req.params.id, function(data) {
    res.end();
  });
});



module.exports = router;
