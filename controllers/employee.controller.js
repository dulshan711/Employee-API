const employee = require("./models/employees.model.js");

const getemployees = async (req, res) => {
  try {
    const employee = await Employee.find({});
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getemployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createemployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateemployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findByIdAndUpdate(id, req.body);

    if (!employee) {
      return res.status(404).json({ message: "product not found" });
    }

    const Udpateemployee = await Employee.findById(id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteemployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findByIdAndDelete(id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee delete successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getemployees,
  getemployee,
  createemployee,
  updateemployee,
  deleteemployee,
};
