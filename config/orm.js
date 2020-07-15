const connection = require("../config/connection.js");

var orm = {
  selectAll: function(input, callback) {
    var queryString = "SELECT * FROM " + input + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  insertOne: function(table, columns, values, callback) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += columns[0]+","+columns[1];
    queryString += ") ";
    queryString += "VALUES (";
    queryString += "?,?"
    queryString += ") ";

    connection.query(queryString, values, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },
  updateOne: function(table, objColVals, condition, callback) {
    var queryString = "UPDATE " + table;

    console.log(objColVals);

    queryString += " SET eaten=";
    queryString += objColVals.eaten;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  }
};

module.exports = orm;