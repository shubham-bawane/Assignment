const express = require("express");
const app = express();
const EmployeeRouter = require("./router/EmployeeRoutes");
 

const mongoose = require('mongoose');


//middleware
app.use(express.json());
app.use("/api/Employees", EmployeeRouter);

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('MongoDB Connected!'));

 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app; 