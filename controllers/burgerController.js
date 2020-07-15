const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectBurgers(function(data) {
    var burgerObject = {
      burgers: data
    };
    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.createBurger(["name", "eaten"], [req.body.name, req.body.eaten], function(res) {
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = '" + req.params.id + "'"

  burger.updateBurger(
    {
      eaten: 1
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;