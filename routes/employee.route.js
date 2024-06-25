const express = require("express");
const employee = require("./models/employees.model.js");

//const Product = require("./models/products.model.js");
const router = express.Router();
const {
  getemployees,
  getemployee,
  createemployee,
  updateemployee,
  deleteemployee,
} = require("../controllers/employee.controller");

router.get("/", getemployees);
router.post("/", createemployee);

router.get("/:id", getemployee);

//update Product
router.put("/:id", updateemployee);

//Delete product
router.delete("/:id", deleteemployee);

module.exports = router;
