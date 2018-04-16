// Import MySQL connection.
var connection = require("../config/connection.js");


  // Object for all our SQL statement functions.

var orm = {
  // The last variable cb represents the anonymous function being passed from server.js
  all: function(tableInput, cb) {
    
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log("result from the ORM all query is"  + result);
      cb(result);
    });
  },

  create: function (tableInput, burger_name, cb) {
    if (valOfCol){
      valOfCol = 1;
    }

    var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
    connection.query(queryString, [tableInput, burger_name], function (err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);

    });
  },
 



  // The last variable cb represents the anonymous function being passed from server.js
  updateOne: function(burgerID, callback){

    // Run MySQL Query
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {item_id: burgerID}], function (err, result) {
        if (err) throw err;
        callback(result);
        console.log ("result from the updateOne orm query callback" + result);
      });

  }

};

module.exports = orm;
