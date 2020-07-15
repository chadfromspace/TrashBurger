// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectBurgers: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  createBurger: function(column, value, callback) {
    orm.insertOne("burgers", column, value, function(res) {
      callback(res);
    });
  },
  updateBurger: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;