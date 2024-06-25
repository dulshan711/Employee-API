const express = require("express");
const mongoose = require("mongoose");
const employee = require("./models/employees.model.js");
const employeeRoute = require("./routes/employee.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/employees", employeeRoute);

app.get("/", (req, res) => {
  res.send("Hello there from Node API");
});

mongoose
  .connect(
    "mongodb+srv://agpeagle:lZOzQmjG1bzVltUl@backenddb.i12ok0x.mongodb.net/EMP-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("connected to the DataBase");
    app.listen(5000, () => {
      console.log("server is running on port 5000");
    });
  })
  .catch(() => {
    console.log("Connection fail");
  });
