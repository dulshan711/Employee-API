const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const employee = require("./models/employees.model.js");

const Employeeschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter the product name"],
    },

    Position: {
      type: String,
      required: true,
      default: 0,
    },

    startDate: {
      type: Number,
      required: true,
      default: 0,
    },

    Image: {
      type: Number,
      required: false,
    },
  },
  {
    Timestamp: true,
  }
);

const employee = mongoose.model("employee", Employeeschema);

module.exports = employee;
